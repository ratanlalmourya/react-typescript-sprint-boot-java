import { Carousel } from "./components/carsousel";
import { ExploreTopBooks } from "./components/explore-top-books";
import { Heros } from "./components/heros";
import { LibraryServices } from "./components/library-services";

export const Homepage = () => {

    return (
        <>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </>
    );
}