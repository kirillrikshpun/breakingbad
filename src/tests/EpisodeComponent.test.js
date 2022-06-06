import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import EpisodeComponent from "../components/EpisodeComponent";

test("renders episode", async () => {
  const history = createMemoryHistory();
  history.push(
    "/episode",
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
    }
  );

  render(
    <Router location={history.location} navigator={history}>
      <EpisodeComponent />,
    </Router>
  );

  // 👇️ your tests...
  await screen.findAllByText("Pilot");
  await screen.findAllByText("01-20-2008");
  await Promise.all(
    [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Krazy-8",
      "Bogdan Wolynetz",
    ].map(async (a) => await screen.findAllByText(a))
  );
  fireEvent.click(screen.getByText("back"));
});
