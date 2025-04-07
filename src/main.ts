const appElement = document.querySelector<HTMLDivElement>("#app");
if (appElement) {
  appElement.innerHTML = `
  <div id="wrapper">
    <div id="left">
      <div id="logo">
        <h1>
          <img src="/images/galaxy-logo.svg" alt="Galaxy Fire Protection Logo" width="200" height="auto">
        </h1>
      </div>
      <div id="nav">
        <ul>
          <li class="important"><a href="index.html" class="important">Home</a></li>
          <li><a href="about.html" class="important">About Us</a></li>
          <li><a href="services.html" class="important">Services</a></li>
          <li><a href="contact.html" class="important">Contact Us</a></li>
          <li><a href="links.html" class="important">Links</a></li>
        </ul>
      </div>
      <table width="100%" border="0">
        <tr>
          <td>
            <p align="center">
              <a href="mailto:service@galaxyfireprotection.com">service@galaxyfireprotection.com</a><br>
              <strong>
                <span class="style32">TELEPHONE<br>
                416.230.7848<br>
                (Mon-Fri: 8am-5pm)</span>
              </strong>
            </p>
          </td>
        </tr>
      </table>
      <div id="support">
        <p></p>
        <table width="98%" border="0" align="center">
          <tr>
            <td height="64">
              <div align="center">
                <strong>
                  <span class="style34">
                    <font size="4">EMERGENCY NUMBER</font>
                  </span>
                </strong><br>
                <strong>
                  <span class="style17">
                    <span class="style9">
                      <font size="5">416.715.3026</font>
                    </span>
                  </span><br>
                  24 Hours a Day - 7 Days a Week
                </strong>
              </div>
            </td>
          </tr>
        </table>
        <p align="center"><br>
          <img src="/images/cfaa-logo.svg" alt="CFAA Logo" width="122" height="145" border="0">
        </p>
        <div align="center">
          <img src="/images/nfpa-logo.svg" width="130" height="130">
        </div>
        <table width="241" border="0">
          <tr>
            <td>
              <div align="center"><br>
                <img src="/images/esa-logo.svg" alt="ESA Logo" width="145" height="111">
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div align="center"></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="style21" id="right">
      <h4 class="clear">
        <span class="style20">Welcome to Galaxy Fire Protection</span>
      </h4>

      <p align="center" class="style22">Known for "Out of this World Service" at "Down to Earth Prices"</p>

      <div id="welcome">
        <p align="justify">
          Galaxy Fire Protection is a total Fire Protection Company and has been a member of the CFAA (Canadian Fire Alarm Association) since 2006, but is also and International Member of NFPA (National Fire Protection Association) and an ESA (Electrical Safety Authority) Licensed Electrical Contractor.
        </p>
        <p align="justify"><br>
          We also hold memberships in the GTAA (Greater Toronto Apartment Association); OCofT (Ontario College of Trades) and ONPHA (Ontario Non-Profit Housing Association)
        </p>
        <hr>
        <table width="100%" border="0">
          <tr>
            <td width="30%">
              <div align="center">
                <img src="/images/cfaa-logo.svg" width="121" height="50">
              </div>
            </td>
            <td width="25%">
              <div align="center">
                <img src="/images/nfpa-logo.svg" width="87" height="65">
              </div>
            </td>
            <td width="45%">
              <div align="center">
                <img src="/images/esa-logo.svg" width="95" height="50">
              </div>
            </td>
          </tr>
        </table>
        <hr><br>
        <table width="100%" border="0">
          <tr>
            <td width="24%">
              <img src="/images/fire-extinguisher.svg" alt="Fire Extinguisher" width="112" height="113">
            </td>
            <td width="23%">
              <span class="style23">If you are having service concerns, or need an Installation or Annual Fire Inspection, be sure to <a href="contact.html">contact us</a></span>
            </td>
            <td width="23%">
              <img src="/images/fire-alarm-panel.svg" alt="Fire Alarm Panel" width="112" height="113">
            </td>
            <td width="30%">
              <span class="style23">We tackle any project, large or small i.e. Emergency Service, Annual / Monthly Fire Inspections, Installations, & Repairs.</span>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <div align="center">
                <span class="style24"><br><strong>We will be pleased to assist you.</strong></span>
              </div>
            </td>
          </tr>
        </table>
        <br>
        <hr>
      </div>
    </div>
    <div class="clear">
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p><br></p>
    </div>
    <div id="footer">
      <div id="copyright">Copyright © 2024 Galaxy Fire Protection</div>
    </div>
  </div>
  `;
}
