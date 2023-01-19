import {IFlight} from "../interfaces/flight.interface";
import React, {FC, ReactNode} from "react";
import {useAppDispatch} from "../hooks/reduxhooks";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import {arrow} from "../constans";
import {Link} from "react-router-dom";


export interface IProps{
    flight: IFlight,
    children?: ReactNode
    search?:any;
}
const Flight:FC<IProps> = ({flight,search}) => {
    useAppDispatch();
    const Highlight = () => {
        if (!search) return <Typography className={'highlightTitle'}>{flight?.title}</Typography>
        const regexp = new RegExp(search, 'ig')
        const matchValue = flight?.title.match(regexp)
        if (matchValue){
            return flight.title?.split(regexp).map((s, index, array) => {
                if(index < array.length - 1){
                    const c = matchValue.shift()
                    return(
                        <Typography className={'highlightTitle'}>
                            {s}<Typography className={'highlight highlightTitle'}>{c}</Typography>
                        </Typography>
                    )
                }
                return <Typography className={'highlightTitle'} >{s}</Typography>
            })
        }
        return <Typography className={'highlightTitle'}>{flight?.title}</Typography>
     }
    const HighlightText = () => {
        if (!search) return <Typography className={'highlightText'}>{flight?.summary}</Typography>
        const regexp = new RegExp(search, 'ig')
        const matchValue = flight?.summary.match(regexp)
        if (matchValue){
            return flight.summary?.split(regexp).map((s, index, array) => {
                if(index < array.length - 1){
                    const c = matchValue.shift()
                    return(
                        <Typography className={'highlightText'}>
                            {s}<Typography className={'highlight highlightText'}>{c}</Typography>
                        </Typography>
                    )
                }
                return <Typography className={'highlightText'} >{s}</Typography>
            })
        }
        return <Typography className={'highlightText'}>{flight?.summary}</Typography>
    }


    return(
        <div className={'cards'}>
            <div>
                <CardMedia
                    component="img"
                    height="194"
                    image={flight.imageUrl}
                    alt="Paella dish"
                />
                <CardContent sx={{height:20}} className={'title'}>
                    {/* @ts-expect-error Server Component */}
                    <Highlight/>
                </CardContent>
                <CardContent sx={{height:70,overflow:'auto'}}>
                    {/* @ts-expect-error Server Component */}
                    <HighlightText/>
                </CardContent>
                <div className={"card_button"}>
                    <CardActions disableSpacing>
                          <CardActions disableSpacing>
                              <Link to={`/details/${flight.id}`}>
                                  <Typography sx={{paddingLeft: 1, cursor:'pointer',display:'flex',alignItems:'center',fontWeight:'700'}}>
                                      Read more <img src={arrow} alt={'arrow'}  style={{width:18, paddingLeft:5}} />
                                  </Typography>
                              </Link>
                          </CardActions>
                    </CardActions>
                    <Collapse  timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Full information:</Typography>
                            <Typography paragraph>
                                Name: {flight.title}
                            </Typography>
                            <Typography paragraph>
                                Date: {flight.publishedAt}
                            </Typography>
                            <Typography paragraph>
                                About: {flight.summary}
                            </Typography>
                            <Typography paragraph>
                                Company: {flight.newsSite}
                            </Typography>
                            <Typography paragraph>
                               Source: {flight.url}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </div>
            </div>
        </div>
    )

}
export {
    Flight
}