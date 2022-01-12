import React from "react";
import { Footer } from "../../../home/layouts";

const FooterConsole = React.forwardRef((props, ref) => {
	return(
		<div style={{zIndex:9999}} ref={ref}>
			<Footer/>
		</div>
	);
});

export default FooterConsole;
