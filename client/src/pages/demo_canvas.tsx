import { atom, useAtom } from "jotai";
import { themeAtom } from "@/state/themeAtom";
import { Topbar } from "@/components/canvas/components/topbar";
import { Stage, Layer, Line, Rect, Circle } from "react-konva";
import { useState } from "react";
import { toolAtom } from "@/state/toolAtom";

export function DemoCanvasPage() {
  const [theme] = useAtom(themeAtom);
  const [tool] = useAtom(toolAtom);
  const [color] = useAtom(atom("#000000"));
  const [brushSize] = useAtom(atom(3));

  const [lines, setLines] = useState<any[]>([]);
  const [shapes, setShapes] = useState<any[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = (e: any) => {
    const pos = e.target.getStage().getPointerPosition();
    if (!pos) return;
    setIsDrawing(true);

    if (tool === "pencil") {
      // Create a new line with the current color
      setLines((prev) => [
        ...prev,
        { points: [pos.x, pos.y], color, width: brushSize },
      ]);
    } else if (tool === "rhombus" || tool === "circle") {
      // Create a new shape with the current color
      setShapes((prev) => [
        ...prev,
        { tool, x: pos.x, y: pos.y, width: 0, height: 0, color },
      ]);
    }
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    if (!point) return;

    if (tool === "pencil") {
      setLines((prev) => {
        const newLines = [...prev];
        const lastLine = newLines[newLines.length - 1];
        lastLine.points = lastLine.points.concat([point.x, point.y]);
        return newLines;
      });
    } else if (tool === "rhombus" || tool === "circle") {
      setShapes((prev) => {
        const newShapes = [...prev];
        const lastShape = newShapes[newShapes.length - 1];
        lastShape.width = point.x - lastShape.x;
        lastShape.height = point.y - lastShape.y;
        return newShapes;
      });
    }
  };

  const handleMouseUp = () => setIsDrawing(false);

  return (
    <div className={`h-screen w-screen overflow-hidden ${theme === "Dark" ? "bg-gray-950" : "bg-slate-200"}`}>
      <Topbar />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color} // Each line keeps its own color
              strokeWidth={line.width}
              tension={0.5}
              lineCap="round"
            />
          ))}

          {shapes.map((shape, i) =>
            shape.tool === "rectangle" ? (
              <Rect
                key={i}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                stroke={shape.color}
              />
            ) : (
              <Circle
                key={i}
                x={shape.x + shape.width / 2}
                y={shape.y + shape.height / 2}
                radius={Math.sqrt(shape.width ** 2 + shape.height ** 2) / 2}
                stroke={shape.color}
              />
            )
          )}
        </Layer>
      </Stage>
    </div>
  );
}

