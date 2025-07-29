"use client"

import React, { useState, useEffect, useRef, useCallback, forwardRef } from "react"
import {
  IconCaretUpDownFilled,
  IconCaretUpFilled,
  IconCaretDownFilled,
  IconSortAscending,
  IconSortDescending,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { TableButton } from "@/components/ui/table-button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { motion } from "framer-motion"

const initialData = [
    { id: 'RUN001', actor: 'Advanced Web Scraper with Custom Headers', status: 'Succeeded', duration: '2m 34s', items: 1247, usage: 0.45 },
    { id: 'RUN002', actor: 'Cheerio HTML Parser and Data Extractor', status: 'Failed', duration: '45s', items: 0, usage: 0.02 },
    { id: 'RUN003', actor: 'Puppeteer Browser Automation Engine', status: 'Running', duration: '5m 12s', items: 3456, usage: 1.23 },
    { id: 'RUN004', actor: 'Selenium Web Driver Data Collector', status: 'Succeeded', duration: '1m 18s', items: 892, usage: 0.31 },
    { id: 'RUN005', actor: 'Multi-Source Data Processing Pipeline', status: 'Timeout', duration: '10m 0s', items: 567, usage: 2.15 },
];

type ColumnKey = 'id' | 'actor' | 'status' | 'duration' | 'items' | 'usage';

const columnDisplayNames: Record<ColumnKey, string> = {
  id: 'Run ID',
  actor: 'Actor',
  status: 'Status',
  duration: 'Duration',
  items: 'Items',
  usage: 'Usage',
};

interface DataTableCellProps {
  row: typeof initialData[0];
  column: ColumnKey;
  width: number;
  isLastColumn: boolean;
}

const MemoizedDataTableCell = React.memo(forwardRef<HTMLTableCellElement, DataTableCellProps>(function DataTableCell({ row, column, width, isLastColumn }, ref) {
  const content = () => {
    switch (column) {
      case 'status':
        return (
          <Badge 
            variant="secondary" 
            className={
              row.status === 'Succeeded' ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' :
              row.status === 'Failed' ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100' :
              row.status === 'Running' ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100' :
              row.status === 'Timeout' ? 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100' :
              'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
            }
          >
            {row.status}
          </Badge>
        );
      case 'items':
        return row.items.toLocaleString();
      case 'usage':
        return `$${row.usage.toFixed(2)}`;
      default:
        return row[column];
    }
  };

  return (
    <TableCell
      ref={ref}
      className={`font-normal h-10 text-sm pl-4 pr-4 truncate ${!isLastColumn ? 'border-r border-border' : ''}`}
      style={{ width }}
      title={column === 'actor' ? row.actor : String(row[column])}
    >
      {content()}
    </TableCell>
  );
}));

const MotionTableHead = motion(TableHead);
const MotionTableCell = motion(MemoizedDataTableCell);
const MotionTableBody = motion(TableBody);
const MotionTableRow = motion(TableRow);

const tableBodyVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const tableRowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};


export function DataTable() {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [tableData] = useState(initialData);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [columns, setColumns] = useState<ColumnKey[]>(['id', 'actor', 'status', 'duration', 'items', 'usage']);
  const [columnWidths, setColumnWidths] = useState<Record<ColumnKey, number>>({
    id: 0, actor: 0, status: 0, duration: 0, items: 0, usage: 0,
  });
  const [minWidths, setMinWidths] = useState<Record<ColumnKey, number>>({
    id: 0, actor: 0, status: 0, duration: 0, items: 0, usage: 0,
  });

  const [isResizing, setIsResizing] = useState<number | null>(null);
  const startX = useRef(0);
  const startWidths = useRef<number[]>([]);
  const headerRefs = useRef<(HTMLTableCellElement | null)[]>([]);
  const [animatingColumns, setAnimatingColumns] = useState<{active: ColumnKey, target: ColumnKey} | null>(null);

  const calculateWidths = useCallback(() => {
    if (!tableContainerRef.current) return;

    const containerWidth = tableContainerRef.current.clientWidth;
    const newMinWidths: Record<ColumnKey, number> = { id: 80, actor: 150, status: 140, duration: 100, items: 100, usage: 100 };

    columns.forEach((col, index) => {
      const header = headerRefs.current[index];
      if (header) {
        const button = header.querySelector('button');
        if (button) {
          newMinWidths[col] = button.offsetWidth + 32; // 32 for padding
        }
      }
    });

    newMinWidths.status = Math.max(newMinWidths.status, 140);
    const totalMinWidth = columns.reduce((sum, col) => sum + newMinWidths[col], 0);

    setMinWidths(newMinWidths);

    if (totalMinWidth > containerWidth) {
        const scaleFactor = containerWidth / totalMinWidth;
        const scaledWidths: Record<ColumnKey, number> = { id: 0, actor: 0, status: 0, duration: 0, items: 0, usage: 0 };
        columns.forEach(col => {
            scaledWidths[col] = Math.floor(newMinWidths[col] * scaleFactor);
        });
        setColumnWidths(scaledWidths);
    } else {
        const extraSpace = containerWidth - totalMinWidth;
        const newWidths = { ...newMinWidths };
        newWidths.actor += extraSpace;
        setColumnWidths(newWidths);
    }
  }, [columns]);

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;
    const debouncedCalculateWidths = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => calculateWidths(), 150);
    };

    window.addEventListener('resize', debouncedCalculateWidths);

    const initialCalculationTimeout = setTimeout(() => {
        calculateWidths();
        setIsInitialLoad(false);
    }, 0);

    return () => {
        window.removeEventListener('resize', debouncedCalculateWidths);
        clearTimeout(debounceTimer);
        clearTimeout(initialCalculationTimeout);
    }
  }, [calculateWidths]);

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setIsResizing(index);
    startX.current = e.clientX;
    startWidths.current = columns.map(col => columnWidths[col]);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isResizing === null) return;
    const diff = e.clientX - startX.current;

    const currentColName = columns[isResizing];
    const nextColName = columns[isResizing + 1];

    if (!currentColName || !nextColName) return;

    const currentWidth = startWidths.current[isResizing];
    const nextWidth = startWidths.current[isResizing + 1];
    const totalWidth = currentWidth + nextWidth;

    const currentMinWidth = minWidths[currentColName];
    const nextMinWidth = minWidths[nextColName];

    let newCurrentWidth = currentWidth + diff;
    let newNextWidth = nextWidth - diff;

    if (newCurrentWidth < currentMinWidth) {
        newCurrentWidth = currentMinWidth;
        newNextWidth = totalWidth - newCurrentWidth;
    }

    if (newNextWidth < nextMinWidth) {
        newNextWidth = nextMinWidth;
        newCurrentWidth = totalWidth - newNextWidth;
    }

    setColumnWidths(prev => ({
      ...prev,
      [currentColName]: newCurrentWidth,
      [nextColName]: newNextWidth,
    }));
  }, [isResizing, minWidths, columns]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(null);
  }, []);

  useEffect(() => {
    if (isResizing !== null) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);
  
  const handleMove = (direction: 'left' | 'right', col: ColumnKey) => {
    const index = columns.findIndex(c => c === col);
    const targetIndex = direction === 'left' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= columns.length) return;

    const targetColKey = columns[targetIndex];
    setAnimatingColumns({ active: col, target: targetColKey });

    const newColumns = [...columns];
    [newColumns[targetIndex], newColumns[index]] = [newColumns[index], newColumns[targetIndex]];
    
    setColumns(newColumns);
    setOpenDropdown(null);

    setTimeout(() => {
        setAnimatingColumns(null);
    }, 750);
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) {
      return <IconCaretUpDownFilled className="h-3 w-3 ml-1 text-muted-foreground" />
    }
    return sortDirection === 'asc' ? 
      <IconCaretUpFilled className="h-3 w-3 ml-1 text-blue-600" /> : 
      <IconCaretDownFilled className="h-3 w-3 ml-1 text-blue-600" />
  }

  const sortedData = React.useMemo(() => {
    if (!sortField) return tableData

    return [...tableData].sort((a, b) => {
      let aValue = a[sortField as keyof typeof a]
      let bValue = b[sortField as keyof typeof b]

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [tableData, sortField, sortDirection])

  const handleSortOption = (field: string, direction: 'asc' | 'desc') => {
    setSortField(field)
    setSortDirection(direction)
    setOpenDropdown(null)
  }

  const sortKey = `${sortField}-${sortDirection}`;

  return (
    <div ref={tableContainerRef} className="rounded-lg border border-border overflow-hidden bg-background">
      <Table style={{ tableLayout: 'fixed', width: '100%' }}>
        <TableHeader>
            <TableRow className="bg-sidebar hover:bg-sidebar">
                {columns.map((col, index) => {
                    const isActive = animatingColumns?.active === col;
                    const isTarget = animatingColumns?.target === col;
                    const shouldAnimate = isActive || isTarget;
                    
                    return (
                    <MotionTableHead 
                        key={col} 
                        ref={(el) => { headerRefs.current[index] = el; }} 
                        className={`h-10 text-xs font-semibold px-2 relative ${index < columns.length - 1 ? 'border-r border-border' : ''}`}
                        style={{width: columnWidths[col]}}
                        layout={isInitialLoad || shouldAnimate ? false : true}
                        initial={false}
                        animate={{
                            opacity: shouldAnimate ? [0, 1] : 1,
                            y: shouldAnimate ? [20, 0] : 0
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: shouldAnimate ? 0.05 : 0
                        }}
                    >
                        <DropdownMenu onOpenChange={(open) => setOpenDropdown(open ? col : null)}>
                        <DropdownMenuTrigger asChild>
                            <TableButton isActive={openDropdown === col}>
                                <span className="truncate">{columnDisplayNames[col]}</span>
                                {getSortIcon(col)}
                            </TableButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem onClick={() => handleSortOption(col, 'asc')}>
                            <IconSortAscending className="h-4 w-4 mr-2" />
                            Sort ascending
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSortOption(col, 'desc')}>
                            <IconSortDescending className="h-4 w-4 mr-2" />
                            Sort descending
                            </DropdownMenuItem>
                            <DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500">
                                Column order
                            </DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => handleMove('left', col)}
                                disabled={index === 0}
                            >
                                <IconArrowLeft className="h-4 w-4 mr-2" />
                                Move left
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => handleMove('right', col)}
                                disabled={index === columns.length - 1}
                            >
                                <IconArrowRight className="h-4 w-4 mr-2" />
                                Move right
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                        {index < columns.length - 1 && (
                            <div 
                                data-resize-handle 
                                onMouseDown={(e) => handleMouseDown(e, index)}
                            />
                        )}
                    </MotionTableHead>
                )})}
            </TableRow>
        </TableHeader>
        <MotionTableBody key={sortKey} variants={tableBodyVariants} initial="hidden" animate="visible">
            {sortedData.map((row, rowIndex) => (
              <MotionTableRow 
                key={row.id} 
                className="hover:bg-muted/50"
                variants={tableRowVariants}
              >
                {columns.map((col, index) => {
                    const isActive = animatingColumns?.active === col;
                    const isTarget = animatingColumns?.target === col;
                    const shouldAnimate = isActive || isTarget;
                    
                    return (
                    <MotionTableCell 
                        key={col}
                        row={row} 
                        column={col} 
                        width={columnWidths[col]}
                        isLastColumn={index === columns.length - 1}
                        layout={isInitialLoad || shouldAnimate ? false : true}
                        initial={false}
                        animate={{
                            opacity: shouldAnimate ? [0, 1] : 1,
                            y: shouldAnimate ? [20, 0] : 0
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: shouldAnimate ? 0.05 + (rowIndex * 0.04) : 0
                        }}
                    />
                )})}
              </MotionTableRow>
            ))}
        </MotionTableBody>
      </Table>
    </div>
  )
} 