import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;


export const todosRemainingSelector = createSelector(
    searchTextSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    todoListSelector,
    ( searchText, status, priorities, todoList) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.lenght
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return (todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed)
                && (priorities.lenght ? priorities.includes(todo.priority) : true)
            );
        });
    }
);

