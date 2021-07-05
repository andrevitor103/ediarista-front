import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './pageTitle.style';

interface PageTitleProps{
    title: string;
    subtitle: string;
    teste?: string | JSX.Element;
    
}


const PageTitle: React.FC<PageTitleProps> = (props) => {
    
    return (
        <div>
            <PageTitleContainer>
                
                <PageTitleStyled>
                    {props.title}
                </PageTitleStyled>
                
                <PageSubtitleStyled>
                    {props.subtitle}
                </PageSubtitleStyled>

            </PageTitleContainer>
        </div>
    )
};

export default PageTitle;