import "./App.css";

import { Route, Routes } from "react-router";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				{/* <Route path="/catalog" element={<Catalog />} />
				<Route path="/favorite" element={<Favorite />} /> */}
				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	);
}
export default App;
