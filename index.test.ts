import { Ticketmaster } from "./index";

describe("ticketmaster-typescript-sdk", () => {
    it("initialize client", async () => {
        const ticketmaster = new Ticketmaster({
            apiKey: "API_KEY",
        });
    });
});
