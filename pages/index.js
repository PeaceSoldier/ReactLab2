import Counter from "@/components/Counter/Counter";
import Game from "@/components/Game/Game";
import styles from "../styles/Home.module.css"
import {Cart} from "@/components/Cart/Cart";


export default function Home() {
  const counters = [
    {id: 1, initial: 6, min: -5, max: 10},
    {id: 2, initial: 5},
    {id: 3},
  ];
  const products = [
    {id: 1, name: "Product Name", price: 300, min: 1, max: 5},
    {id: 2, name: "Product Name", price: 200, min: 1, max: 2},
    {id: 3, name: "Product Name", price: 150, min: 2, max: 10},
  ];
  return (
    <>
      <div className={styles.wrapper}>
          <h1>Task 1</h1>

        {
          counters.map(counter =>
              // eslint-disable-next-line react/jsx-key
              <Counter counter={counter}/>
          )
        }
      </div>
      <div className={styles.wrapper}>
          <h1>Task 3</h1>
          <Cart products={products}/>
      </div>
        <div className={styles.wrapper}>
            <h1>Task 4</h1>
            <Game/>
        </div>
    </>
  )
}
