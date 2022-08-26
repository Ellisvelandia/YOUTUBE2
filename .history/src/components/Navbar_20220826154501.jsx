import { Stack } from "@mui/material";
import { Link } from "@mui/icons-material";
import { logo } from "../utils/constants";

import { logo } from "../utils/constants";

const Navbar = () => {
<Stack direction="row" alignItems="center" p={2}
sx={{position: 'sticky', background:'#000', top:'0', justifyContent: 'space-between'}}
>
<Link to="/" style={{display: 'flex', alignI}}>
<img src={logo} alt="logo" height={45} />
</Link>

</Stack>
  
};

export default Navbar;
