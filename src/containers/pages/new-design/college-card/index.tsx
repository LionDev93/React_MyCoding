import * as React from 'react';
import Card from '@edmit/component-library/src/components/atoms/card';
import Text from '@edmit/component-library/src/components/atoms/typography/text';


import { CollegeModel } from "@edmit/component-library/src/lib/models";
import { EEdmitColor } from "@edmit/component-library/src/lib/colors";
import { FlexColumnContainer, FlexItem, FlexRowContainer, DesktopHidden, MobileHidden } from '@edmit/component-library/src/components/layout';
// import { FinancialGrade } from '../../../../graphql/generated';
import { formatDollarsWhole, EFinancialGrade } from "@edmit/component-library/src/shared";
import { FitChip } from '@edmit/component-library/src/components/molecules/graph/fit';
import Icon, { EIconName } from '@edmit/component-library/src/components/atoms/icon';

const imageStyle = (url: string | null) => ({
    background: url ? `url(${url})` : EEdmitColor.LightGrey,
    backgroundSize: url ? "cover" : undefined,
    borderRadius: "3px",
    minHeight: "100px",
    minWidth: "132px"
});

const cardFooterStyle = {
    borderTop: "1px solid #ededed"
}

// CollegeCardInformationChip
interface ICollegeCardInformationChipViewModel {
    title: string;
    value: React.ReactNode | string;
}

type CollegeCardInformationChipProps = ICollegeCardInformationChipViewModel

const cardInformationChipTitleStyle = {
    color: "#6f6868",
    fontFamily: "Lato",
    fontWeight: 500,
    fontSize: "14px",
    marginBottom: "2px"
}

const cardInformationChipValueStyle = {
    fontFamily: "Lato",
    fontWeight: 500,
    fontSize: "16px"
}

const CollegeCardInformationChip: React.FC<CollegeCardInformationChipProps> = (props) => {

    return (
        <>
            <FlexColumnContainer>
                <FlexItem style={cardInformationChipTitleStyle}>{props.title}</FlexItem>
                <FlexItem style={cardInformationChipValueStyle}>{props.value}</FlexItem>
            </FlexColumnContainer>
        </>
    )
}

// CardButton
type CardButtonOnClickFn = () => any;

interface ICardButtonPropsViewModel {
    text: string;
    onClick: CardButtonOnClickFn;
    loading?: boolean;
    testId?: string;
    hovered: boolean;
}

type CardButtonProps = ICardButtonPropsViewModel

export const CardButton: React.FC<CardButtonProps> = (props) => {
    // const [hovered, setHovered] = React.useState(props.hovered)

    const cardButtonStyle: React.CSSProperties = {
        border: `solid 1px ${EEdmitColor.MediumGrey}`,
        borderRadius: "2px",
        minWidth: "100px",
        color: "#282727",
        fontFamily: "Lato",
        fontWeight: 600,
        fontSize: "14px",
        userSelect: "none",
        cursor: "pointer"
    }

    const cardButtonHoveredStyle: React.CSSProperties = {
        ...cardButtonStyle,
        border: `solid 1px ${EEdmitColor.DarkGrey}`
    }
    const ifHovered = (hovered: boolean, nonHoverStyle: React.CSSProperties, hoverStyle: React.CSSProperties) => {
        return hovered ? hoverStyle : nonHoverStyle
    }

    return (
        <>
            <div
                data-testid={props.testId}
                onClick={(e) => {
                    e.stopPropagation();
                    props.onClick();
                    return false;
                }}
                className="pa2 center tc"
                style={ifHovered(props.hovered, cardButtonStyle, cardButtonHoveredStyle)}
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            >
                {props.loading ? <Icon name={EIconName.Loading} className={"icon-animated-loading"}></Icon> : props.text}
            </div>
        </>
    )
}

//-----Attributes------
const getAttributes = () => {
    let attributes: { icon: EIconName, color: EEdmitColor, text: React.ReactNode | string }[] = []

    attributes.push(
        {
            icon: EIconName.Success,
            color: EEdmitColor.Green,
            text: "Affordable"
        }
    )
    attributes.push(
        {
            icon: EIconName.Cancel,
            color: EEdmitColor.Red,
            text: "A stretch"
        }
    )
    attributes.push(
        {
            icon: EIconName.Success,
            color: EEdmitColor.Green,
            text: "A good value"
        }
    )
    attributes.push(
        {
            icon: EIconName.Cancel,
            color: EEdmitColor.Red,
            text: "Not a good value"
        }
    )
    attributes.push(
        {
            icon: EIconName.People,
            color: EEdmitColor.Red,
            text: "Mechanical Engineering majors"
        }
    )
    attributes.push(
        {
            icon: EIconName.Cancel,
            color: EEdmitColor.Red,
            text: "Not a good value"
        }
    )
    return attributes
}
const cardAttributeIconStyle = {
    fontSize: "16px",
}
const cardAttributeTextStyle = {
    color: "#6f6868",
    fontSize: "12px",
    fontWeight: 600,
}

const mobileCardAttributeTextStyle = {
    color: "#6f6868",
    fontSize: "14px",
    fontWeight: 600,
}
const mobileCardAttributeNumberStyle = {
    color: "#282727",
    fontSize: "14px",
    fontWeight: 900,
}

const attributes = getAttributes().map(attribute => (
    <FlexItem className="pa2">
        <FlexRowContainer className="items-center ">
            <FlexItem
                style={
                    {
                        ...cardAttributeIconStyle,
                        color: attribute.color
                    }
                }
                className="mr1"
            >
                <Icon name={attribute.icon}></Icon>
            </FlexItem>
            <FlexItem style={cardAttributeTextStyle}>
                {attribute.text}
            </FlexItem>
        </FlexRowContainer>
    </FlexItem>
))

const attributes_mobile = getAttributes().map(attribute => (
    <FlexItem className="pa1">
        <FlexRowContainer className="items-center ">
            <FlexItem
                style={
                    {
                        ...cardAttributeIconStyle,
                        color: attribute.color
                    }
                }
                className="mr1"
            >
                <Icon name={attribute.icon}></Icon>
            </FlexItem>
            <FlexItem style={cardAttributeTextStyle}>
                {attribute.text}
            </FlexItem>
        </FlexRowContainer>
    </FlexItem>
))
const cardXButtonStyle: React.CSSProperties = {
    position: "absolute",
    width: "18px",
    height: "18px",
    marginTop: "-9px",
    marginLeft: "-9px",
    borderRadius: "19px",
    lineHeight: "18px",
    background: "#6f6868",
    textAlign: "center",
    left: "100%",
    cursor: "pointer"
}
const ifHovered = (hovered: boolean, nonHoverStyle: React.CSSProperties, hoverStyle: React.CSSProperties) => {
    return hovered ? hoverStyle : nonHoverStyle
}
//----------CollegeCard
interface ICollegeCardViewModel {
    college?: CollegeModel
    // recCollege?: RecommendationCollege
    callToAction?: React.ReactNode
    className?: string
    onClickEdstimate?: () => any;
    onRemove?: () => any;
    onClickReport?: () => any;
}
interface ICollegeCardActions {
    onClick?: () => any;
}
type CollegeCardProps = ICollegeCardViewModel & ICollegeCardActions;

const CollegeCard: React.FC<CollegeCardProps> = props => {
    const [showMore, setShowMore] = React.useState(false);
    const [hovered, setHovered] = React.useState(false);

    const cardStyle = {
        background: "#fff",
        border: "1px solid #c9c9c9",
        fontFamily: "Lato",
        boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
        cursor: props.onClick ? "pointer" : undefined
    }

    const cardHoverStyle = {
        ...cardStyle,
        border: `1px solid ${EEdmitColor.DarkGrey}`,
        boxShadow: `0 0 12px 0 rgba(0, 0, 0, 0.2)`
    }


    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    const DesktopPage = () => {
        return (
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={props.className}
            >
                <Card className="" style={{ ...ifHovered(hovered, cardStyle, cardHoverStyle), maxWidth: 720, position: 'relative' }}>
                    {(props.onRemove && hovered) && (
                        <div onClick={props.onRemove} style={cardXButtonStyle}>
                            <Icon name={EIconName.Close} style={{ color: "#fff", fontSize: "12px" }}></Icon>
                        </div>
                    )}
                    <div className="flex flex-row pa3">
                        <div>
                            <div style={imageStyle('https://storage.googleapis.com/edmit-wikipedia-scraped-college-images/FINAL_IMAGES/Caltech_Entrance.jpg')}></div>
                        </div>
                        <div className="flex-grow-1">
                            <div className="flex flex-column ph3">
                                <div>
                                    <Text className="ma0 tl" style={{ fontSize: 21, color: '#282727' }}>
                                        {'Case Western Reserve University'}
                                    </Text>
                                    <Text className="ma0 tl" style={{ fontSize: 12, }}>
                                        {'Cleveland, Ohio'}{' '}{'Private University'}
                                    </Text>
                                </div>
                                <FlexRowContainer className="justify-between pr4">
                                    <FlexItem className="w-third">
                                        <CollegeCardInformationChip
                                            {
                                            ...{
                                                title: "Published cost",
                                                value: formatDollarsWhole(64994)
                                            }
                                            }
                                        />
                                    </FlexItem>
                                    <FlexItem className="w-third">
                                        <CollegeCardInformationChip
                                            {
                                            ...{
                                                title: "Your Edstimate",
                                                value: formatDollarsWhole(36503)
                                            }
                                            }
                                        />
                                    </FlexItem>
                                    <FlexItem className="w-third">
                                        <FlexRowContainer className="items-center">
                                            <FlexItem className="mr2" style={{ marginTop: -5 }}>
                                                <FitChip
                                                    size={40}
                                                    admissionUnlikely={false}
                                                    financialGrade={EFinancialGrade.B}//{getFinancialGrade(props.college)}
                                                    loading={false}
                                                    className={'mt1'}
                                                />
                                            </FlexItem>
                                            <FlexItem style={{ marginTop: -10 }}>
                                                <span style={cardInformationChipTitleStyle}>Financial<br />Grade</span>
                                            </FlexItem>
                                        </FlexRowContainer>
                                    </FlexItem>
                                </FlexRowContainer>
                            </div>
                        </div>
                        <div>
                            <CardButton
                                text={props.onRemove ? "View report" : "Add to List"}
                                onClick={() => { alert("clicked") }}
                                hovered={hovered}
                            >
                            </CardButton>
                        </div>
                    </div>
                    <FlexRowContainer className="pv2 ph3 justify-between" style={
                        {
                            ...cardFooterStyle
                        }
                    }>
                        <FlexRowContainer className="flex flex-wrap overflow-hidden"
                            style={{ height: showMore ? "auto" : "34px", maxWidth: 430 }}
                        >
                            {attributes}
                        </FlexRowContainer>
                        <div onClick={() => handleShowMore()}>
                            <FlexRowContainer className="ma2 gray-dim justify-start items-center pointer">
                                <Icon name={EIconName.UnfoldMore} ></Icon>
                                <Text className="ma0 br--bottom" style={{ fontSize: 12, fontWeight: 600, borderBottom: "1px dotted #999999", lineHeight: 1.5 }}>
                                    {!showMore ? 'Show More' : 'Show Less'}
                                </Text>
                            </FlexRowContainer>
                        </div>
                    </FlexRowContainer>
                </Card>
            </div>
        )
    }

    const MobilePage = () => {
        return (
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Card className="ma2" style={{ ...ifHovered(hovered, cardStyle, cardHoverStyle), maxWidth: 280, position: 'relative' }}>
                    {(hovered) && (
                        <div onClick={props.onRemove} style={cardXButtonStyle}>
                            <Icon name={EIconName.Close} style={{ color: "#fff", fontSize: "12px" }}></Icon>
                        </div>
                    )}
                    <div className="flex flex-column pa3">
                        <div className="flex flex-column pt3">
                            <Text className="ma0 tl" style={{ fontSize: 21, color: '#282727' }}>
                                {'Case Western Reserve University'}
                            </Text>
                            <Text className="ma0 tl" style={{ fontSize: 12, }}>
                                {'Cleveland, Ohio'}{'   '}{'Private University'}
                            </Text>
                            <FlexRowContainer className="mv3">
                                <FlexItem className="" style={{}}>
                                    <FitChip
                                        size={40}
                                        admissionUnlikely={false}
                                        financialGrade={EFinancialGrade.B}//{getFinancialGrade(props.college)}
                                        loading={false}
                                        className={'mt1'}
                                    />
                                </FlexItem>
                                <FlexItem className="mh3" style={{ width: 1, backgroundColor: '#ededed' }}></FlexItem>
                                <FlexColumnContainer className="">
                                    <FlexRowContainer>
                                        <Text className="ma0" style={mobileCardAttributeTextStyle}>
                                            Published cost:
                                        </Text>
                                        <Text className="ma0 ml2" style={mobileCardAttributeNumberStyle}>
                                            {formatDollarsWhole(64994)}
                                        </Text>
                                    </FlexRowContainer>
                                    <FlexRowContainer className="">
                                        <Text className="ma0" style={mobileCardAttributeTextStyle}>
                                            Your Edstimate:
                                        </Text>
                                        <Text className="ma0 ml2" style={mobileCardAttributeNumberStyle}>
                                            {formatDollarsWhole(36503)}
                                        </Text>
                                    </FlexRowContainer>
                                </FlexColumnContainer>
                            </FlexRowContainer>
                        </div>
                        <div>
                            <CardButton
                                text="View report"
                                onClick={() => { alert("View Report") }}
                                hovered={hovered}
                            >
                            </CardButton>
                        </div>
                    </div>
                    <FlexRowContainer className="pv2 ph3 justify-between" style={
                        {
                            ...cardFooterStyle
                        }
                    }>
                        <div className="flex flex-column"
                        >
                            {attributes_mobile}
                        </div>

                    </FlexRowContainer>
                </Card>
            </div>
        )
    }
    return (
        <div>
            <DesktopHidden>
                {MobilePage()}
            </DesktopHidden>
            <MobileHidden>
                {DesktopPage()}
            </MobileHidden>
        </div>
    )
};

export default CollegeCard;
