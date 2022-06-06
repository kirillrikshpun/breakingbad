import { fireEvent, render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import HomeComponent from "../components/HomeComponent";
import _ from "lodash";

test("renders episode", async () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <HomeComponent
        data={[
          {
            episode_id: 1,
            title: "Pilot",
            season: "1",
            air_date: "01-20-2008",
            characters: [
              "Walter White",
              "Jesse Pinkman",
              "Skyler White",
              "Hank Schrader",
              "Marie Schrader",
              "Walter White Jr.",
              "Krazy-8",
              "Bogdan Wolynetz",
            ],
            episode: "1",
            series: "Breaking Bad",
          },
        ]}
      />
    </Router>
  );

  // 👇️ your tests...
  await screen.findAllByText("Pilot");
  await screen.findAllByText("01-20-2008");
  // I want this line makes the click event fired, but it doesn't
  fireEvent.click(screen.getByText("Pilot"));
  expect(history.location.pathname).toBe("/episode");

  const a = _.isEqual(
    {
      episode: {
        episode_id: 1,
        title: "Pilot",
        season: "1",
        air_date: "01-20-2008",
        characters: [
          "Walter White",
          "Jesse Pinkman",
          "Skyler White",
          "Hank Schrader",
          "Marie Schrader",
          "Walter White Jr.",
          "Krazy-8",
          "Bogdan Wolynetz",
        ],
        episode: "1",
        series: "Breaking Bad",
      },
    },
    history.location.state
  );
  expect(a).toBe(true);
});
