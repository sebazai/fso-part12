import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Todo from "../Todos/Todo";
import { vi } from "vitest";

describe("Todo", () => {
  test("renders a not completed", () => {
    render(
      <Todo
        todo={{ text: "Hellooo test", done: false }}
        deleteTodo={vi.fn()}
        completeTodo={vi.fn()}
      />
    );
    expect(screen.getByText("Hellooo test")).toBeDefined();
    expect(screen.getByText("This todo is not done")).toBeDefined();
    expect(screen.getByText("Delete")).toBeDefined();
    expect(screen.getByText("Set as done")).toBeDefined();
  });
  test("renders a completed", () => {
    render(
      <Todo
        todo={{ text: "Hellooo test", done: true }}
        deleteTodo={vi.fn()}
        completeTodo={vi.fn()}
      />
    );
    expect(screen.getByText("Hellooo test")).toBeDefined();
    expect(screen.getByText("This todo is done")).toBeDefined();
    expect(screen.queryByText("Delete")).toBeDefined();
    expect(screen.queryByText("Set as done")).toBeNull();
  });
});
