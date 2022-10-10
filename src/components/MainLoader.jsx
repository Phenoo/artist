import Logo from './Logo'

const MainLoader = () => {
  return (
    <div className='mainloader'>
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
      <Logo />
    </div>
  )
}

export default MainLoader