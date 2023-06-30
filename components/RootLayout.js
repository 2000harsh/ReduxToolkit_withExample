import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { Provider } from "react-redux";
import Store from "../store/Store";

const RootLayout = () => {
    return (<>
        <Provider store={Store}>
            <NavigationBar />
            <main>
                <Outlet />
            </main>
        </Provider>
    </>
    )
}

export default RootLayout;