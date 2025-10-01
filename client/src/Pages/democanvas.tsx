import { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

export default function DemoCanvas() {
  const [squares, setSquares] = useState<
    Array<{ id: string; x: number; y: number; size: number; fill: string }>
  >([]);

  function handleClick(e: any) {
    const stage = e.target.getStage();
    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const id = `square-${Date.now()}`;
    setSquares((prev) => [
      ...prev,
      { id, x: pointer.x - 25, y: pointer.y - 25, size: 50, fill: "#3b82f6" },
    ]);
  }

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-xl font-semibold mb-2">Simple Square Drawer</h1>
      <p className="text-sm text-gray-600 mb-4">Click anywhere on the canvas to draw a blue square.</p>

      <Stage
        width={600}
        height={400}
        className="border rounded bg-white"
        onClick={handleClick}
      >
        <Layer>
          {squares.map((sq) => (
            <Rect
              key={sq.id}
              x={sq.x}
              y={sq.y}
              width={sq.size}
              height={sq.size}
              fill={sq.fill}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

