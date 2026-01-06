// frontend/src/components/TaskList.tsx
import React from 'react';
import { Task } from '@/types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (id: number, updates: Partial<Task>) => Promise<void>;
  onDeleteTask: (id: number) => Promise<void>;
  onToggleCompletion: (id: number) => Promise<void>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask, onDeleteTask, onToggleCompletion }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">No tasks</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by creating a new task.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={onUpdateTask}
            onDelete={onDeleteTask}
            onToggleCompletion={onToggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;