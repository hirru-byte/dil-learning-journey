'use client';

import CourseCard from './CourseCard';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    ReactFlow,
    Node,
    Edge,
    Handle,
    Position,
    NodeTypes,
    Background,
    ReactFlowProvider,
    useReactFlow,
    Controls,
    NodeChange,
    EdgeChange,
    Connection,
    NodeProps
} from '@xyflow/react';
import { useCallback, useState, useEffect, useRef, KeyboardEvent } from 'react';
import '@xyflow/react/dist/style.css';

// Type definitions for node data
export interface CourseNodeData extends Record<string, unknown> {
    title: string;
    duration: string;
    price?: string;
    type?: 'green' | 'purple' | 'blue' | 'split' | 'grey';
    hasAsterisk?: boolean;
    hasDoubleAsterisk?: boolean;
    link?: string;
    greenPrice?: string;
    purplePrice?: string;
    purpleDuration?: string;
}

export interface TitleNodeData extends Record<string, unknown> {
    label: string;
}

export interface CourseNodeProps extends NodeProps {
    data: CourseNodeData;
}

export interface TitleNodeProps extends NodeProps {
    data: TitleNodeData;
}

// Custom Node Component
function CourseNode({ data }: CourseNodeProps) {
    const handleClick = () => {
        if (data.link && data.link !== '#') {
            window.open(data.link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            className="px-4 h-full w-full cursor-pointer hover:opacity-90 transition-opacity"
            onClick={handleClick}
            onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Navigate to ${data.title} course`}
        >
            <CourseCard
                title={data.title}
                duration={data.duration}
                price={data.price}
                type={data.type}
                hasAsterisk={data.hasAsterisk}
                hasDoubleAsterisk={data.hasDoubleAsterisk}
                link={data.link}
                greenPrice={data.greenPrice}
                purplePrice={data.purplePrice}
                purpleDuration={data.purpleDuration}
            />
            <Handle id="left" type="target" position={Position.Left} style={{ opacity: 0, pointerEvents: 'none' }} />
            <Handle id="right" type="source" position={Position.Right} style={{ opacity: 0, pointerEvents: 'none' }} />
            <Handle id="top" type="target" position={Position.Top} style={{ opacity: 0, pointerEvents: 'none' }} />
            <Handle id="bottom" type="source" position={Position.Bottom} style={{ opacity: 0, pointerEvents: 'none' }} />
        </div>
    );
}

// Title Node Component
function TitleNode({ data }: TitleNodeProps) {
    return (
        <div className="px-4 py-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                {data.label}
            </h3>
        </div>
    );
}

const nodeTypes: NodeTypes = {
    course: CourseNode,
    title: TitleNode,
};

export interface ReactFlowCurriculumProps {
    nodes: Node[];
    edges: Edge[];
    containerHeight?: string;
    showControls?: boolean;
    alignToTopRight?: boolean;
}

// Inner component that uses ReactFlow hooks
function ReactFlowContent({
    nodes: initialNodes,
    edges: initialEdges,
    containerHeight = 'h-[600px] sm:h-[800px] md:h-[800px] lg:h-[800px]',
    showControls = true,
    alignToTopRight = true
}: ReactFlowCurriculumProps) {
    const { setViewport } = useReactFlow();
    const containerRef = useRef<HTMLDivElement>(null);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    // Handle window resize to make ReactFlow responsive
    useEffect(() => {
        const adjustViewport = () => {
            // Get the container dimensions from ref
            if (!containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;

            // Get the bounding box of all nodes (including titles)
            const bounds = {
                minX: Math.min(...initialNodes.map(node => node.position.x)),
                minY: Math.min(...initialNodes.map(node => node.position.y)),
                maxX: Math.max(...initialNodes.map(node => {
                    if (node.type === 'title') return node.position.x + 300; // Approximate title width
                    return node.position.x + (node.style?.width as number || 500);
                })),
                maxY: Math.max(...initialNodes.map(node => {
                    if (node.type === 'title') return node.position.y + 40; // Title height
                    return node.position.y + 220; // Approximate course node height
                })),
            };

            // Calculate content dimensions
            const contentWidth = bounds.maxX - bounds.minX;
            const contentHeight = bounds.maxY - bounds.minY;

            // Calculate padding
            const padding = 20;

            // Calculate zoom to fit content in container
            const zoomX = (containerWidth - padding * 2) / contentWidth;
            const zoomY = (containerHeight - padding * 2) / contentHeight;
            const zoom = Math.min(zoomX, zoomY, 1); // Don't zoom in beyond 1

            let x: number;
            let y: number;

            if (alignToTopRight) {
                // Calculate position to align content to top-right
                // X: Position so that the rightmost content aligns with container right edge
                const scaledContentWidth = contentWidth * zoom;
                x = containerWidth - padding - scaledContentWidth - bounds.minX * zoom;
                // Y: Position so that the topmost content aligns with container top edge
                y = padding - bounds.minY * zoom;
            } else {
                // Calculate position to align content to top-left
                // X: Position so that the leftmost content aligns with container left edge
                x = padding - bounds.minX * zoom;
                // Y: Position so that the topmost content aligns with container top edge
                y = padding - bounds.minY * zoom;
            }

            // Set viewport
            setViewport(
                {
                    x,
                    y,
                    zoom
                },
                { duration: 0 }
            );
        };

        const handleResize = () => {
            adjustViewport();
        };

        window.addEventListener('resize', handleResize);
        // Initial setup on mount - use a longer delay to ensure ReactFlow is rendered
        const timer = setTimeout(() => {
            adjustViewport();
        }, 200);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, [setViewport, initialNodes, alignToTopRight]);

    return (
        <div ref={containerRef} className={`w-full ${containerHeight}`}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                nodesDraggable={false}
                nodesConnectable={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                panOnScroll={false}
                defaultViewport={{ x: 0, y: 0, zoom: 1 }}
            >
                <Background color="#000" gap={16} />
                {showControls && <Controls fitViewOptions={{ padding: 0.1, maxZoom: 1 }} />}
            </ReactFlow>
        </div>
    );
}

// Main shared component
export default function ReactFlowCurriculum(props: ReactFlowCurriculumProps) {
    return (
        <ReactFlowProvider>
            <ReactFlowContent {...props} />
        </ReactFlowProvider>
    );
}

