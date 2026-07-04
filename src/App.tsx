import { Paper } from "./components/Layout/Paper";
import { Container } from "./components/Layout/Container";
import { InvitationCard } from "./components/Invitation/InvitationCard";

function App() {
  return (
    <Paper>
      <Container>
        <InvitationCard />
        <footer className="sr-only">
          دعوة زفاف محمد و هديل، جعله الله عقدًا مباركًا ميمونًا
        </footer>
      </Container>
    </Paper>
  );
}

export default App;
