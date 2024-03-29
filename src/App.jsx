import "./App.css";

import { Route, Routes } from "react-router";
import {Home} from "./pages/Home/Home";
import {Favorite} from "./pages/Favorite/Favorite";
import {Nannies} from "./pages/Nannies/Nannies";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home/>} />
				<Route path="/nannies" element={<Nannies/>} />
				<Route path="/favorites" element={<Favorite />} />
				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	);
}
export default App;
