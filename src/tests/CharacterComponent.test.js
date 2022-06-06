import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import axios from "axios"
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    push: jest.fn(),
    state: {
      character: 'Walter White'
    }
  }),
}));

jest.mock("axios");
import CharacterComponent from "../components/CharacterComponent";

test("renders character", async () => {
  const character = [
    {
      appearance: [1, 2, 3, 4, 5],
      better_call_saul_appearance: [],
      birthday: "09-07-1958",
      category: "Breaking Bad",
      char_id: 1,
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      name: "Walter White",
      nickname: "Heisenberg",
      occupation: ["High School Chemistry Teacher", "Meth King Pin"],
      portrayed: "Bryan Cranston",
      status: "Presumed dead",
    },
  ];
  
  const a = axios.get.mockResolvedValueOnce({data: character});
  const d = render(<CharacterComponent />)
  await waitFor(() => expect(a).toHaveBeenCalledTimes(1))
  await screen.findAllByText('Walter White')
  expect(d.container.getElementsByTagName('img')[0].src).toBe('https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg')
});