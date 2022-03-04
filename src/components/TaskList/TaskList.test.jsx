import { render } from '@testing-library/react';
import { TaskProvider } from '../../context/TaskContext';
import { UserProvider } from '../../context/UserContext';
import TaskList from './TaskList';

test('tasklist renders', () => {
  const { container } = render(
    <UserProvider>
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
