import { produce } from "immer";
import { create } from "zustand";

export type Seat = {
  index: number;
  enabled: boolean;
};

type State = {
  seats: Seat[];
};

type Action = {
  toggleSeat: (index: number) => void;
  resetAll: () => void;
};

const initialSeats = () => Array.from({ length: 100 }, (_, i) => ({ index: i, enabled: false }));

export const useStore = create<State & Action>((set) => ({
  seats: initialSeats(),
  toggleSeat: (index) => {
    set(
      produce((state: State) => {
        state.seats[index].enabled = !state.seats[index].enabled;
      })
    );
  },
  resetAll() {
    set(() => ({
      seats: initialSeats(),
    }));
  },
}));
