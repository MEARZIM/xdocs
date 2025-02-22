"use client"

import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const markers = Array.from({ length: 81 }, (_, i) => i);
export const Ruler = () => {
    const [leftMargin, setLeftMargin] = useState(56);
    const [rightMargin, setRightMargin] = useState(56);

    const [isDraggingLeft, setIsDraggingLeft] = useState(false);
    const [isDraggingRight, setIsDraggingRight] = useState(false);
    const rulerRef = useRef<HTMLDivElement>(null);

    const handleLeftMouseDown = () => {
        setIsDraggingLeft(true);
        console.log(isDraggingLeft);
    }

    const handleRightMouseDown = () => {
        setIsDraggingRight(true);
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        // console.log(isDraggingLeft)
        if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
            const container = rulerRef.current.querySelector("#ruler-container");
            if (container) {
                const containerRef = container.getBoundingClientRect();
                const relativeX = e.clientX - containerRef.left;
                const rawPosition = Math.max(0, Math.min(800, relativeX));

                if (isDraggingLeft) {
                    const maxLeftPosition = 800 - rightMargin - 100;
                    const newLeftPosition = Math.min(rawPosition, maxLeftPosition);
                    setLeftMargin(newLeftPosition);
                } else if (isDraggingRight) {
                    const maxRightPosition = 800 - (leftMargin + 100);
                    const newRightPosition = Math.max(800 - rawPosition, 0);
                    const constrainedRightPosition = Math.min(newRightPosition, maxRightPosition);
                    setRightMargin(constrainedRightPosition);
                }
            }
        }
    }

    const handleMouseUp = () => {
        setIsDraggingLeft(false);
        setIsDraggingRight(false);
    }

    const handleLeftDoubleClick = () => {
        setLeftMargin(56);
    }

    const handleRightDoubleClick = () => {
        setRightMargin(56);
    }

    return (
        <>
            <div
                className="h-6 border-b border-gray-200 items-end relative select-none print:hidden"
                ref={rulerRef}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    id="ruler-container"
                    className="max-w-[800px] mx-auto h-full relative"
                >
                    <Marker
                        position={leftMargin}
                        isLeft={true}
                        isDragging={isDraggingLeft}
                        onDoubleClick={handleLeftDoubleClick}
                        onMouseDown={handleLeftMouseDown}
                    />
                    <Marker
                        position={rightMargin}
                        isDragging={isDraggingRight}
                        isLeft={false}
                        onDoubleClick={handleRightDoubleClick}
                        onMouseDown={handleRightMouseDown}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-full">
                        <div className="realtive h-full w-[800px]">
                            {
                                markers.map(marker => {
                                    const position = (marker * 800) / 80;

                                    return (
                                        <div
                                            key={marker}
                                            className="absolute bottom-0"
                                            style={{ left: `${position}px` }}
                                        >
                                            {marker % 10 === 0 && (
                                                <>
                                                    <div
                                                        className="absolute bottom-0 w-[1px] h-2 bg-neutral-500"
                                                    />
                                                    <span className="absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2">
                                                        {marker / 10 + 1}
                                                    </span>
                                                </>
                                            )}
                                            {marker % 5 === 0 && marker % 10 !== 0 && (
                                                <div
                                                    className="absolute bottom-0 w-[1px] h-1.5 bg-neutral-500"
                                                />
                                            )}
                                            {marker % 5 !== 0 && (
                                                <div
                                                    className="absolute bottom-0 w-[1px] h-0.5 bg-neutral-500"
                                                />
                                            )}

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


interface MarkerProps {
    position: number;
    isLeft: boolean;
    isDragging: boolean;
    onMouseDown: () => void;
    onDoubleClick: () => void;
}

const Marker = ({
    position,
    isDragging,
    isLeft,
    onDoubleClick,
    onMouseDown,
}: MarkerProps) => {
    return (
        <>
            <div
                className="absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2"
                style={{ [isLeft ? "left" : "right"]: `${position}px` }}
                onMouseDown={onMouseDown}
                onDoubleClick={onDoubleClick}
            >
                <ChevronDown className="absolute left-1/2 top-0 h-full fill-blue-400 tranform -translate-x-1/2" color="blue" />
                <div
                    className="absolute left-1/2 top-4 transform -translate-x-2"
                    style={{
                        height: "100vh",
                        width: "1px",
                        transform: "scaleX(0.5",
                        backgroundColor: "blue",
                        display: isDragging ? "block" : "none",
                    }}
                />

            </div>
        </>
    )
}