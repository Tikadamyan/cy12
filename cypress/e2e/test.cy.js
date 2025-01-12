import ProfilePage from '../support/pages/ProfilePage';

describe('Profile Management and Navigation', () => {

    const profilePage = new ProfilePage();

    it('should log in, update wallet address, and change password', () => {
        profilePage.visit();
        profilePage.login('tigranadamyan1994@gmail.com', 'Adam212555444595!');
        profilePage.openUserMenu();
        profilePage.openUpdateWallet();
        profilePage.interceptWalletUpdateRequest();
        profilePage.updateWalletAddress('0x11ab2b6f958af12d5f3e226f9d971c82889c9c63');
        profilePage.save();
        profilePage.waitForWalletUpdate();
    });
});
