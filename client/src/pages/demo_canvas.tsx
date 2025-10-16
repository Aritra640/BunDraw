import { Stage, Layer, Line, Rect, Circle } from "react-konva";
import { useState, useRef } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "@/state/themeAtom";
import { toolAtom } from "@/state/toolAtom";
import { Topbar } from "@/components/canvas/components/topbar";

export function DemoCanvasPage() {
  const [theme] = useAtom(themeAtom);
  const [tool] = useAtom(toolAtom);
  const [color] = useState("#000000");
  const [brushSize] = useState(3);
  const eraserSize = 20;

  const [lines, setLines] = useState<any[]>([]);
  const [shapes, setShapes] = useState<any[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const stageRef = useRef<any>(null);
  const scaleRef = useRef(1);
  const [stagePos, setStagePos] = useState({ x: 0, y: 0 });
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const getAdjustedPos = (pos: { x: number; y: number }) => ({
    x: (pos.x - stagePos.x) / scaleRef.current,
    y: (pos.y - stagePos.y) / scaleRef.current,
  });

  const handleMouseDown = (e: any) => {
    const stage = stageRef.current;
    const pos = stage.getPointerPosition();
    if (!pos) return;

    if (tool === "hand") {
      lastPos.current = pos;
      return;
    }

    setIsDrawing(true);
    const adj = getAdjustedPos(pos);

    if (tool === "pencil" || tool === "erasure") {
      setLines((prev) => [
        ...prev,
        {
          points: [adj.x, adj.y],
          color,
          width: tool === "erasure" ? eraserSize : brushSize,
          mode: tool === "erasure" ? "erase" : "draw",
        },
      ]);
    } else if (["rhombus", "square", "circle", "line"].includes(tool)) {
      setShapes((prev) => [
        ...prev,
        { tool, x: adj.x, y: adj.y, width: 0, height: 0, color },
      ]);
    }
  };

  const handleMouseMove = (e: any) => {
    const stage = stageRef.current;
    const pos = stage.getPointerPosition();
    if (!pos) return;

    if (tool === "hand" && lastPos.current) {
      const dx = pos.x - lastPos.current.x;
      const dy = pos.y - lastPos.current.y;
      setStagePos((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
      lastPos.current = pos;
      return;
    }

    if (!isDrawing) return;

    const adj = getAdjustedPos(pos);

    if (tool === "pencil" || tool === "erasure") {
      setLines((prev) => {
        const newLines = [...prev];
        const lastLine = newLines[newLines.length - 1];
        lastLine.points = lastLine.points.concat([adj.x, adj.y]);
        return newLines;
      });
    } else if (["rhombus", "square", "circle", "line"].includes(tool)) {
      setShapes((prev) => {
        const newShapes = [...prev];
        const lastShape = newShapes[newShapes.length - 1];
        lastShape.width = adj.x - lastShape.x;
        lastShape.height = adj.y - lastShape.y;
        return newShapes;
      });
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    lastPos.current = null;
  };

  return (
    <div
      className={`h-screen w-screen overflow-hidden ${
        theme === "Dark" ? "bg-gray-950" : "bg-slate-200"
      }`}
    >
      <Topbar />
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Apply pan offset at Layer level */}
        <Layer x={stagePos.x} y={stagePos.y}>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={line.width}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.mode === "erase" ? "destination-out" : "source-over"
              }
            />
          ))}

          {shapes.map((shape, i) => {
            if (shape.tool === "square") {
              return (
                <Rect
                  key={i}
                  x={shape.x}
                  y={shape.y}
                  width={shape.width}
                  height={shape.height}
                  stroke={shape.color}
                />
              );
            }
            if (shape.tool === "rhombus") {
              const size = Math.sqrt(shape.width ** 2 + shape.height ** 2);
              return (
                <Rect
                  key={i}
                  x={shape.x}
                  y={shape.y}
                  width={size}
                  height={size}
                  stroke={shape.color}
                  rotation={45}
                  offsetX={size / 2}
                  offsetY={size / 2}
                />
              );
            }
            if (shape.tool === "circle") {
              return (
                <Circle
                  key={i}
                  x={shape.x + shape.width / 2}
                  y={shape.y + shape.height / 2}
                  radius={Math.sqrt(shape.width ** 2 + shape.height ** 2) / 2}
                  stroke={shape.color}
                />
              );
            }
            if (shape.tool === "line") {
              return (
                <Line
                  key={i}
                  points={[shape.x, shape.y, shape.x + shape.width, shape.y + shape.height]}
                  stroke={shape.color}
                  strokeWidth={brushSize}
                  lineCap="round"
                />
              );
            }
            return null;
          })}
        </Layer>
      </Stage>
    </div>
  );
}

