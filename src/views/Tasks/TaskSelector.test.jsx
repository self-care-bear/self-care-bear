import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import { TaskProvider } from '../../context/TaskContext';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import TaskSelector from './TaskSelector';

jest.mock('../../context/UserContext.jsx');

const server = setupServer(
  rest.get(
    'https://qtcmkfsjelfhlmlkamgh.supabase.co/rest/v1/profile',

    (req, res, ctx) => {
      return res(
        ctx.json({
          user_name: '',
          user_id: '',
          bear: '',
          task_list: [],
        })
      );
    }
  ),
  rest.get(
    'https://qtcmkfsjelfhlmlkamgh.supabase.co/rest/v1/created_tasks',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 287,
            created_at: '2022-03-04T01:41:21.415639+00:00',
            task: 'hi',
            task_description: 'description',
            user_id: 'abd84a46-656c-4738-bb69-fe3b6c5975ea',
            is_selected: null,
            is_completed: null,
          },
        ])
      );
    }
  ),
  rest.post(
    'https://qtcmkfsjelfhlmlkamgh.supabase.co/rest/v1/created_tasks',
    (req, res, ctx) => {
      console.log('REQ', req.body);
      return res(
        ctx.json([
          {
            id: 287,
            created_at: '2022-03-04T01:41:21.415639+00:00',
            task: 'task',
            task_description: 'desc',
            user_id: 'abd84a46-656c-4738-bb69-fe3b6c5975ea',
            is_selected: null,
            is_completed: null,
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('users do stuff', async () => {
  render(
    <UserProvider mockUser={{ id: 1, email: 'email@email.com' }}>
      <TaskProvider>
        <MemoryRouter>
          <TaskSelector />
        </MemoryRouter>
      </TaskProvider>
    </UserProvider>
  );

  const taskname = await screen.findByRole('heading', {
    name: /hi/i,
  });

  const create = screen.getByRole('button', {
    name: /create habit/i,
  });

  const taskName = screen.getByRole('textbox', {
    name: /habit:/i,
  });

  const taskDesc = screen.getByRole('textbox', {
    name: /description:/i,
  });

  userEvent.type(taskName, 'task');
  userEvent.type(taskDesc, 'desc');
  userEvent.click(create);

  const newTask = await screen.findByRole('heading', {
    name: /task/i,
  });
});
