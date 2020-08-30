import React from 'react';
import { Accordion } from 'semantic-ui-react';

const AboutMeContent = (
    <div className="form-group col-12 flex">
        <label>
            Name:
            <input id="nameSetting" type="text" className="form-control" />
        </label>

        <label>
            Bio:
            <textarea className="form-control" id="bioSetting" rows="3"></textarea>
        </label>

        <label>
            Contact:
            <textarea className="form-control" id="contactSetting" rows="3"></textarea>
        </label>

        <input type="file" />


    </div>
);

const MyMusicContent = (
    <div className="form-group">
        <label>
            Name:
            <input id="nameSetting" type="text" className="form-control" />
        </label>

        <label>
            Bio:
            <textarea className="form-control" id="bioSetting" rows="3"></textarea>
        </label>

        <label>
            Contact:
            <textarea className="form-control" id="contactSetting" rows="3"></textarea>
        </label>

        <label>
            Location Range:
            <input id="rangeSetting" type="number" className="form-control" />
        </label>

    </div>
);

const profilePanels = [
    { key: 'panel-1a', title: 'About Me', content: { content: AboutMeContent } },
    { key: 'panel-ba', title: 'My Music', content: { content: MyMusicContent } },
];

const ProfileContent = (
    <div className="form-group">
        <Accordion.Accordion panels={profilePanels} />
    </div>
);

const level2Panels = [
    { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
    { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
];

const GeneralContent = (
    <div>
        <label>
            Location Range:
            <input id="rangeSetting" type="number" className="form-control" />
        </label>
        {/* <Accordion.Accordion panels={level2Panels} /> */}
    </div>
);

const rootPanels = [
    { key: 'panel-1', title: 'Profile', content: { content: ProfileContent } },
    { key: 'panel-2', title: 'General', content: { content: GeneralContent } },
];

const SettingsComponent = () => {
    return (
        <form>
            <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
            <button>text</button>
        </form>
    );
}

export default SettingsComponent;