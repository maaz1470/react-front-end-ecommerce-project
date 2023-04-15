export default function LeftSidebar(){
    return (
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            {/*- Sidemenu */}
            <div id="sidebar-menu">
              {/* Left Menu Start */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>
                <li>
                  <a href="index.html" className="waves-effect">
                    <i className="mdi mdi-home-variant-outline" /><span className="badge rounded-pill bg-primary float-end">3</span>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="calendar.html" className=" waves-effect">
                    <i className="mdi mdi-calendar-outline" />
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-email-outline" />
                    <span>Email</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="email-inbox.html">Inbox</a></li>
                    <li><a href="email-read.html">Read Email</a></li>
                    <li><a href="email-compose.html">Email Compose</a></li>
                  </ul>
                </li>
                <li className="menu-title">Layouts</li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-gradient" />
                    <span>Vertical</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="layouts-light-sidebar.html">Light Sidebar</a></li>
                    <li><a href="layouts-compact-sidebar.html">Compact Sidebar</a></li>
                    <li><a href="layouts-icon-sidebar.html">Icon Sidebar</a></li>
                    <li><a href="layouts-boxed.html">Boxed Layout</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-page-layout-header" />
                    <span>Horizontal</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="layouts-horizontal.html">Default</a></li>
                    <li><a href="layouts-hori-topbar-dark.html">Topbar Dark</a></li>
                    <li><a href="layouts-hori-boxed-width.html">Boxed width</a></li>
                  </ul>
                </li>
                <li className="menu-title">Pages</li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-account-circle-outline" />
                    <span>Authentication</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="auth-login.html">Login</a></li>
                    <li><a href="auth-register.html">Register</a></li>
                    <li><a href="auth-recoverpw.html">Recover Password</a></li>
                    <li><a href="auth-lock-screen.html">Lock Screen</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-format-page-break" />
                    <span>Utility</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="pages-starter.html">Starter Page</a></li>
                    <li><a href="pages-maintenance.html">Maintenance</a></li>
                    <li><a href="pages-comingsoon.html">Coming Soon</a></li>
                    <li><a href="pages-timeline.html">Timeline</a></li>
                    <li><a href="pages-faqs.html">FAQs</a></li>
                    <li><a href="pages-pricing.html">Pricing</a></li>
                    <li><a href="pages-404.html">Error 404</a></li>
                    <li><a href="pages-500.html">Error 500</a></li>
                  </ul>
                </li>
                <li className="menu-title">Components</li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-briefcase-variant-outline" />
                    <span>UI Elements</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="ui-alerts.html">Alerts</a></li>
                    <li><a href="ui-badge.html">Badge</a></li>
                    <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                    <li><a href="ui-buttons.html">Buttons</a></li>
                    <li><a href="ui-cards.html">Cards</a></li>
                    <li><a href="ui-carousel.html">Carousel</a></li>
                    <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                    <li><a href="ui-grid.html">Grid</a></li>
                    <li><a href="ui-images.html">Images</a></li>
                    <li><a href="ui-lightbox.html">Lightbox</a></li>
                    <li><a href="ui-modals.html">Modals</a></li>
                    <li><a href="ui-offcanvas.html">Offcanvas</a></li>
                    <li><a href="ui-rangeslider.html">Range Slider</a></li>
                    <li><a href="ui-session-timeout.html">Session Timeout</a></li>
                    <li><a href="ui-pagination.html">Pagination</a></li>
                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                    <li><a href="ui-placeholders.html">Placeholders</a></li>
                    <li><a href="ui-sweet-alert.html">Sweetalert 2</a></li>
                    <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                    <li><a href="ui-typography.html">Typography</a></li>
                    <li><a href="ui-toasts.html">Toasts</a></li>
                    <li><a href="ui-video.html">Video</a></li>
                    <li><a href="ui-popover-tooltips.html">Popovers &amp; Tooltips</a></li>
                    <li><a href="ui-rating.html">Rating</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="waves-effect">
                    <i className="ri-eraser-fill" />
                    <span className="badge rounded-pill bg-danger float-end">8</span>
                    <span>Forms</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="form-elements.html">Form Elements</a></li>
                    <li><a href="form-validation.html">Form Validation</a></li>
                    <li><a href="form-advanced.html">Form Advanced Plugins</a></li>
                    <li><a href="form-editors.html">Form Editors</a></li>
                    <li><a href="form-uploads.html">Form File Upload</a></li>
                    <li><a href="form-xeditable.html">Form X-editable</a></li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                    <li><a href="form-mask.html">Form Mask</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-table-2" />
                    <span>Tables</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="tables-basic.html">Basic Tables</a></li>
                    <li><a href="tables-datatable.html">Data Tables</a></li>
                    <li><a href="tables-responsive.html">Responsive Table</a></li>
                    <li><a href="tables-editable.html">Editable Table</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-bar-chart-line" />
                    <span>Charts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="charts-apex.html">Apex Charts</a></li>
                    <li><a href="charts-chartjs.html">Chartjs Charts</a></li>
                    <li><a href="charts-flot.html">Flot Charts</a></li>
                    <li><a href="charts-knob.html">Jquery Knob Charts</a></li>
                    <li><a href="charts-sparkline.html">Sparkline Charts</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-brush-line" />
                    <span>Icons</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="icons-remix.html">Remix Icons</a></li>
                    <li><a href="icons-materialdesign.html">Material Design</a></li>
                    <li><a href="icons-dripicons.html">Dripicons</a></li>
                    <li><a href="icons-fontawesome.html">Font Awesome </a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-map-pin-line" />
                    <span>Maps</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="maps-google.html">Google Maps</a></li>
                    <li><a href="maps-vector.html">Vector Maps</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-share-line" />
                    <span>Multi Level</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li><a href="#">Level 1.1</a></li>
                    <li><a href="#" className="has-arrow">Level 1.2</a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li><a href="#">Level 2.1</a></li>
                        <li><a href="#">Level 2.2</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
          </div>
        </div>
    )
}