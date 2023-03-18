type MenuBtnProps = {
  type: string;
  changeMenuState: () => void
}

const MenuBtn = ({ changeMenuState, type }: MenuBtnProps) => {
  return (
    <button onClick={changeMenuState} className='navigation__btn'>
      <i className={type === 'open' ? 'fa fa-bars' : 'fa fa-close'}></i>
    </button>
  )
}
export default MenuBtn