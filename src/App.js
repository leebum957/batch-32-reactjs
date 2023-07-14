import './App.css';
import Button from './components/button';
import ButtonAccordions from './components/buttonAccordions';
import CardList from './components/cardList';
import Layout from './components/layer';
import PlayList from './components/playList';

function App() { // = Home Page
  return (
    // <div className="App">
    //   <Layout
    //     headerTitle="Xin chào, đây là header!"
    //     footerTitle="Xin chào, đây là footer!"
    //   >
    //     <main className="container">
    //       {/* <Button
    //         icon={<i class="fa-brands fa-apple fa-xl" />}
    //         name="Continue with Apple"
    //         classes="bg-black"
    //       /> */}
    //       <CardList title="Nhân viên ưu tú" />
    //     </main>
    //   </Layout>
    // </div>
    // <CardList title="Nhân viên xuất sắc" />
    // <ButtonAccordions />

    <PlayList />
  );
}

export default App;
