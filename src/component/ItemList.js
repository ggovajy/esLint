import React from 'react'
import { Image, Item } from 'semantic-ui-react'
import Link from 'next/link'

function itemList( { list } ) {
    return (
        <>
        <div style={{paddingTop:50 }}>
            
            <Item.Group>
            {list.map((item) =>(
                <Link href={`/view/${item.id}`} key={item.id}>
                    <a>
                        <Item>
                            <Item.Image src={item.image_link} />
                                

                            <Item.Content>
                                <Item.Header>Arrowhead Valley Camp</Item.Header>
                                <Item.Meta>
                                    <span className='name'>${item.name}</span>
                                    <span className='price'>${item.price}</span>
                                    <span className='stay'>{item.created_at.substr(0,4)}</span>
                                </Item.Meta>
                                <Item.Description>{item.description}</Item.Description>
                            </Item.Content>
                        </Item>
                    </a>
                </Link>
                ))}
            </Item.Group>
            
        </div>
        </>
    )
}

export default itemList
