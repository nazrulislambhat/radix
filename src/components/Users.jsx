'use client';

import { Cross1Icon, Pencil1Icon } from '@radix-ui/react-icons';
import users from './users.json';
import * as Dialog from '@radix-ui/react-dialog';
function Users() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {users.map((user) => (
          <div
            className="flex justify-between rounded-lg bg-white px-4 py-4 user text-gray-900 shadow"
            key={user.id}
          >
            <div>
              <p>{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div>
              <Dialog.Root>
                <Dialog.Trigger>
                  <button className="rounded p-2 hover:bg-gray-200">
                    <Pencil1Icon />
                  </button>
                </Dialog.Trigger>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50">
                  <Dialog.Portal>
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 text-gray-800 shadow-md rounded-md w-full max-w-md">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-xl">Edit Contact</Dialog.Title>
                        <Dialog.Close>
                          <Cross1Icon className="text-gray-400 hover:text-gray-800" />
                        </Dialog.Close>
                      </div>
                      <UserFields user={user} />
                      <div className="text-right">
                        <Dialog.Close className="hover:text-red-800 text-red-600 rounded-md my-4  px-5 py-2">
                          Cancel
                        </Dialog.Close>
                        <button className="hover:bg-green-800 bg-green-600 rounded-md my-4 text-gray-100 px-5 py-2">
                          Save
                        </button>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Overlay>
              </Dialog.Root>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function UserFields({ user }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-900">Name</label>
        <input
          autoFocus
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.name}
        />
      </div>

      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Role
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.role}
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.email}
        />
      </div>
    </div>
  );
}

export default Users;
