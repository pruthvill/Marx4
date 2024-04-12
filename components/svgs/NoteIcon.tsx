import * as React from "react"
const NoteIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={20} {...props}>
    <path d="M3.778 15.666H5.76l5.667-5.62-2.03-2.03-5.62 5.62v2.03Zm8.31-6.28.993-1.04a.453.453 0 0 0 0-.66l-1.323-1.323a.453.453 0 0 0-.66 0l-1.04.992 2.03 2.03Zm-10.2 10.058a1.82 1.82 0 0 1-1.334-.556A1.815 1.815 0 0 1 0 17.555V4.332c0-.519.185-.964.555-1.334.37-.37.815-.555 1.334-.554h3.967a2.835 2.835 0 0 1 1.027-1.37c.48-.346 1.02-.52 1.617-.52a2.7 2.7 0 0 1 1.618.52c.48.346.822.803 1.026 1.37h3.967c.52 0 .964.185 1.335.555.37.37.555.815.554 1.333v13.223c0 .52-.185.964-.555 1.334-.37.37-.815.555-1.334.555H1.89ZM8.5 3.624a.686.686 0 0 0 .708-.708.686.686 0 0 0-.708-.709.686.686 0 0 0-.708.709.686.686 0 0 0 .708.708Z" />
  </svg>
)
export default NoteIcon
