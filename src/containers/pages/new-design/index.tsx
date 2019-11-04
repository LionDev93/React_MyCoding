import * as React from 'react';
import { connect } from 'react-redux';

import { onboardingFormPageViewModel } from './selector';

import CollegeListPage from './college-list'
import ReportPage from './report';
import AidLetterPage from './aid';
import CollegeRecommendation from './college-recommendation';

export enum EMenuType {
    CollegeList,
    CollegeRecommandations,
    FinancialReports,
    StudentLoanCalculator,
    AidLetters,
}

export interface IPaywallPageViewModel { }
type PaywallPageProps = IPaywallPageViewModel;

type SideMenuItemProps = {
    icon: string,
    text: string,
    onClick?: any,
    selected?: boolean,
}
const SideMenuItem: React.SFC<SideMenuItemProps> = props => {
    return (
        <div onClick={props.onClick} className="mv3 pointer">
            <i className="material-icons"
                style={{
                    width: 18,
                    height: 18,
                    fontSize: 18,
                    color: props.selected ? '#921313' : '#6f6868',
                    opacity: props.selected ? 1 : 0.5
                }}>{props.icon}
            </i>
            <span
                style={{
                    fontFamily: 'Lato',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginLeft: '10px',
                    color: '#282727',
                    opacity: props.selected ? 1 : 0.5
                }}
            >
                {props.text}
            </span>
        </div>
    )
}

const PaywallPage: React.FC<PaywallPageProps> = props => {
    const [menuIndex, setMenuIndex] = React.useState(0);

    return (
        <div className="flex flex-row" style={{ paddingTop: 12 }}>
            {/* sidebar */}
            <div className="pv4 ph4" style={{ minHeight: '80vh', width: '300px', backgroundColor: '#ededed' }}>
                <SideMenuItem icon="account_balance" text="College List" onClick={() => setMenuIndex(EMenuType.CollegeList)} selected={menuIndex === EMenuType.CollegeList} />
                <div style={{ height: 1 }} />
                <SideMenuItem icon="map" text="College Recommendations" onClick={() => setMenuIndex(EMenuType.CollegeRecommandations)} selected={menuIndex === EMenuType.CollegeRecommandations} />
                <SideMenuItem icon="lock" text="Financial Reports" onClick={() => setMenuIndex(EMenuType.FinancialReports)} selected={menuIndex === EMenuType.FinancialReports} />
                <SideMenuItem icon="monetization_on" text="Student Loan Calculator" onClick={() => setMenuIndex(EMenuType.StudentLoanCalculator)} selected={menuIndex === EMenuType.StudentLoanCalculator} />
                <SideMenuItem icon="receipt" text="Aid Letters" onClick={() => setMenuIndex(EMenuType.AidLetters)} selected={menuIndex === EMenuType.AidLetters} />
                <div style={{ height: 28 }} />
                <div>
                    <span style={{ fontSize: 10, opacity: 0.75, fontWeight: 'bold', color: '#6f6868' }}>
                        LEARNING CENTER
                    </span>
                </div>
                <SideMenuItem icon="book" text="How to get started" onClick={() => alert("clicked")} />
                <SideMenuItem icon="book" text="Saving & paying for college" onClick={() => alert("clicked")} />
                <SideMenuItem icon="book" text="Building your college list" onClick={() => alert("clicked")} />
                <SideMenuItem icon="book" text="Applying and deciding" onClick={() => alert("clicked")} />
            </div>
            {/* Right side content */}
            <div className="flex-grow-1" style={{ marginTop: 18 }}>
                {menuIndex === 0 && <CollegeListPage />}
                {menuIndex === 1 && <CollegeRecommendation />}
                {menuIndex === 2 && <ReportPage />}
                {menuIndex === 4 && <AidLetterPage />}
            </div>
        </div >
    );
};

export default connect(onboardingFormPageViewModel)(PaywallPage);
