import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import { server } from "./src/mocks/server";

// Innan alla tester körs så starta och lyssna på servern
beforeAll(() => server.listen());

afterEach(() => {
    cleanup();
});

// Efter alla tester körts så stäng ner servern
afterAll(() => server.close())