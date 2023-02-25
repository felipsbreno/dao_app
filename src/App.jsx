import { useAddress, ConnectWallet } from '@thirdweb-dev/react';

const App = () => {
  // Use o hook connectWallet que o thirdweb nos dá.
  const address = useAddress();
  console.log('👋 Address:', address);

  // Esse é o caso em que o usuário ainda não conectou sua carteira
  // ao nosso webapp. Deixe ele chamar connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Bem-vind@s à MTBDAO - a DAO dos pedaleiros de montanha</h1>
        <div className="btn-hero">
          <ConnectWallet />
        </div>
      </div>
    );
  }

  // Esse é o caso em que temos o endereço do usuário
  // o que significa que ele conectou sua carteira ao nosso site!
  return (
    <div className="landing">
      <h1>👀 carteira conectada, e agora?!</h1>
    </div>
  );
};

export default App;
