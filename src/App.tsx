import { AppProvider } from "./providers/AppProvider";
import { PrefecturePopulationPage } from "./features/prefecture-population/components";

function App() {
  return (
    <AppProvider>
      <PrefecturePopulationPage />
    </AppProvider>
  );
}

export default App;
