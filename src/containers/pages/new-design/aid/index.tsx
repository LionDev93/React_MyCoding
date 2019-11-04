import * as React from 'react';
import Heading from '@edmit/component-library/src/components/atoms/typography/heading';
import { EHeadingSize } from '@edmit/component-library/src/components/atoms/typography/heading';
import Text from '@edmit/component-library/src/components/atoms/typography/text';
// import Card from '@edmit/component-library/src/components/atoms/card';
import Button, { EButtonSize, EButtonType } from '@edmit/component-library/src/components/atoms/button';
import Card from '@edmit/component-library/src/components/atoms/card';
import AppealsProgressTable from '@edmit/component-library/src/components/molecules/table-appeal-progress';
import ConnectedSearchColleges from '../../../../connectors/molecules/search-colleges';

import { UniversityButton } from '../report'

import {
    hexGreenDark,
    hexGreenMuted,
} from '@edmit/component-library/src/components/atoms/colors'
const unlocked: boolean = true;
const isAidNav: boolean = false;
const fake_universities: Array<any> = [
    { title: "New York University", level: "A" },
    { title: "Miami University", level: "A" },
];

export interface IAidLetterPageViewModel {
}
type AidLetterPageProps = IAidLetterPageViewModel;

const AidLetterPage: React.FC<AidLetterPageProps> = props => {
    // const [islocked, setLocked] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const handleUniversityClick = (index: number) => {
        setSelectedIndex(index)
    }
    React.useEffect(() => {
    }, []);

    const unlockedPage = () => {
        return (
            <div className="flex pa4">
                <div className="mw8 w-100">
                    <div className="ma2 flex flex-column">
                        <Heading
                            size={EHeadingSize.H2}
                            text="Aid Letters"
                            className="tl ma0"
                            style={{ fontWeight: 900 }}
                        />
                        <div className="mv4 flex flex-row align-top">
                            <div className="ma0 flex flex-column">
                                <div className="br-100 flex justify-center items-center" style={{ backgroundColor: '#921313', width: 32, height: 32, color: '#fff' }}>
                                    1
                                </div>
                                <Text className="ma0 mv3 tl" style={{ maxWidth: 220, fontSize: 16, lineHeight: 1.5 }}>
                                    Upload aid letters for one college for free. Upgrade to Plus to upload unlimited aid letters and to receive the best recommendations.
                                </Text>
                            </div>
                            <div className="ma2 mh5 flex flex-column">
                                <div className="br-100 flex justify-center items-center" style={{ backgroundColor: '#921313', width: 32, height: 32, color: '#fff' }}>
                                    2
                                </div>
                                <Text className="ma0 mv3 tl" style={{ maxWidth: 220, fontSize: 16, lineHeight: 1.5 }}>
                                    Schedule an Edmit Advisor consultation to understand the likelihood of an appeal and determine the best strategy.
                                </Text>
                            </div>
                            <div className="ma0 flex flex-column">
                                <div className="br-100 flex justify-center items-center" style={{ backgroundColor: '#921313', width: 32, height: 32, color: '#fff' }}>
                                    3
                                </div>
                                <Text className="ma0 mv3 tl" style={{ maxWidth: 220, fontSize: 16, lineHeight: 1.5 }}>
                                    After your consultation, Edmit will send you a draft of your appeal letter(s). We’ll be available via email to help you through the process.
                                </Text>
                            </div>
                        </div>
                        <div>
                            <Card className="dib v-top w-100 w-70-l pa3 pa4-l br4">
                                <div className={'dib w5'}>
                                    <ConnectedSearchColleges
                                        myColleges={[]}
                                        onSearch={() => null}
                                        inputValue={''}
                                        onSelected={async selected => { }}
                                    />
                                </div>
                                <div className="mv2 mv4-l">
                                    <div className="w-100 mb3 flex flex-row flex-wrap">
                                        <AppealsProgressTable
                                            data={[]}
                                            isEdmitPlus={false}
                                            isSuperUser={false}
                                            loading={true}
                                            onScheduleConsult={() => { }}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const lockedPage = () => {
        return (
            <div className="flex flex-column pa4 justify-start items-center" >
                <div>
                    <i className="material-icons"
                        style={{
                            width: 96,
                            height: 96,
                            fontSize: 96,
                            color: '#282727',
                        }}>
                        lock
                    </i>
                </div>
                <div className="flex flex-column  items-center">
                    <Heading
                        size={EHeadingSize.H2}
                        text="Upgrade to Plus and negotiate your tuition."
                        className="tc mb1"
                        style={{ fontWeight: 900, maxWidth: 460 }}
                    />
                    <Text className="ma1 tc" style={{ maxWidth: 400 }}>
                        Share your financial aid letters with Edmit and schedule a premium consultation with an Edmit Advisor to review your options.
                    </Text>
                </div>

                <div className="ma4">
                    <Button
                        size={EButtonSize.Large}
                        type={EButtonType.Primary}
                        text={'Learn more'}
                        className="ph5 pv0"
                        style={{ fontSize: 16, height: 46 }}
                        onClick={() => { alert("button clicked") }}
                    />
                </div>
            </div >
        )
    }

    const navPage = () => {
        return (
            <div className="flex pa4">
                <div className="mw8 w-100">
                    <div className="ma2 flex flex-column">
                        <Heading
                            size={EHeadingSize.H2}
                            text="Aid Letters"
                            className="tl ma0"
                            style={{ fontWeight: 900 }}
                        />
                        <div className="flex flex-row mv4">
                            {fake_universities.map((item, index) => {
                                return (
                                    <UniversityButton
                                        text={item.title}
                                        icon={'lock'}
                                        onClick={() => handleUniversityClick(index)}
                                        selected={selectedIndex === index}
                                        disabled={index === 1}
                                    />
                                )
                            }
                            )}
                        </div>
                        <div className="w-100" style={{ height: 1, backgroundColor: '#e3e3e3' }} />
                        {selectedIndex > -1 &&
                            <Card className="mw7 br1 flex flex-column ma1 mv4"
                                style={{ boxShadow: `0 4px 12px 0 rgba(0, 0, 0, 0.05)` }}
                            >
                                <div className={'tc pv3 ph4'} style={{ backgroundColor: hexGreenMuted, color: hexGreenDark }}>
                                    <Heading
                                        size={EHeadingSize.H4}
                                        text={`Let's see how you'll pay for ${fake_universities[selectedIndex].title} and calculate your estimated loan payments.`}
                                        noColor
                                    />
                                </div>
                                <div className={'pv3 w-90 w-75-l ma-auto ph3'}>
                                    <Text className="t-medium">
                                        <ul className={'flex flex-column items-start'}>
                                            <li className={'mv1'}>Review your Edstimate®</li>
                                            <li className={'mv1'}>
                                                Make any changes to your contributions — which impact your loan amount
                                        </li>
                                            <li className={'mv1'}>Check your loan eligibility based on your EFC</li>
                                            <li className={'mv1'}>
                                                We will show you what you will need to borrow in federal and/or private loans and
                                                estimate your loan payments after graduation
                                        </li>
                                        </ul>
                                    </Text>
                                </div>
                                <div className="ma3 flex justify-end">
                                    <Button
                                        size={EButtonSize.Medium}
                                        type={EButtonType.Primary}
                                        text={'Next'}
                                        className="pa3"
                                        // style={{ fontSize: 16}}
                                        onClick={() => { alert("button clicked") }}
                                    />
                                </div>
                            </Card>
                        }
                    </div>
                </div>
            </div>
        )
    }

    if (isAidNav) return navPage();
    if (!unlocked) return lockedPage();
    else if (unlocked) {

        return unlockedPage();
    }
    else return (
        <div>

        </div>
    )
};

export default AidLetterPage;
