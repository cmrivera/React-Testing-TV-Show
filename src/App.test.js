import React from "react";
import App from "./App";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

const mockData = {
  image: { original: "original" },
  name: "name",
  summary: "<p>summary</p>",
  _embedded: {
    episodes: [
      {
        id: "1",
        image: { medium: "medium_image" },
        name: "name",
        season: 3,
        number: 2,
        summary: "<p>Summary</p>",
        runtime: 20,
      },
    ],
  },
};

test("Renders app and tests components", async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);
  return mockFetchShow().then((res) => expect(res).toBe(mockData));
});
