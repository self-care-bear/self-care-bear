import TaskCard from './TaskCard';
import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import { TaskProvider } from '../../context/TaskContext';

test('taskcard renders', async () => {
  const { container } = render(
    <UserProvider>
      <TaskProvider>
        <TaskCard />
      </TaskProvider>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
