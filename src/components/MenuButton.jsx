export default function MenuButton({children, ...rest}) {

  return (
    <button className="menu--button" {...rest}>{children}</button>
  )
}