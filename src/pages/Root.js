import { Outlet } from "react-router-dom";// this expecial component marks where the child route elements should be rendered to.
import MainNavigation from "../components/MainNavigation";

//this element is a whaper of the rest of pages
function RootLayout() {
  return <>
    <MainNavigation />
    <main>
      <Outlet />
    </main>

  </>

}
//Outlet is a component thats render the childlen components in the router
export default RootLayout;