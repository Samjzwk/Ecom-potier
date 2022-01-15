import Styles from './buyBtn.module.scss';

function BuyBtn() {
  return (
    <button type="button" className={Styles.btn}>
      Ajouter au panier
    </button>
  );
  //   return (
  //     <div className={Styles.qtyContainer}>
  //       <button type="button" className={Styles.btnQty}>
  //         +
  //       </button>
  //       <input type="number" className={Styles.qty} />
  //       <button type="button" className={Styles.btnQty}>
  //         -
  //       </button>
  //     </div>
  //  );
}

export default BuyBtn;
