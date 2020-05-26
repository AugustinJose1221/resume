import React, { Component } from 'react'
import './css/style.css';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
const Resume = () => {
  return (
    <div>
    <div className="sidebar">
    <a href={"https://www.augustinjose.com/"}><img src={ require('./img/Icons/website.png') } /></a>
    <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=augustinjose1221@gmail.com"}><img src={ require('./img/Icons/mail.png') } /></a>
    <a href={"+919526538661"}><img src={ require('./img/Icons/phone.png') } title={"+91 9526538661"}/></a>
    <a href={"https://github.com/AugustinJose1221"}><img src={ require('./img/Icons/github.png') } /></a>
    </div>
      <section className="Header">
        <Container>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
            <p align="right">Home</p>
            </Col>
          </Row>
        </Container>
    </section>
    <section className="Profile">
      <Container>
        <Row>
          <Col sm={4}>
          </Col>
          <Col sm={4}>
          <img src={ require('./img/Augustin.JPG') } />
          <h2>Augustin Jose</h2>
          <div className="container">
            <div className="icon">
              <svg id="sign" width="184" height="80" viewBox="0 0 1571 682" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M124.877 610.141C126.209 599.818 127.542 589.494 128.764 577.999C129.987 566.503 131.099 553.836 131.968 544.04C132.837 534.243 133.463 527.317 133.74 517.549C134.017 507.78 133.944 495.168 134.056 485.724C134.168 476.281 134.464 470.005 134.628 460.94C134.793 451.876 134.826 440.023 134.595 431.372C134.363 422.721 133.868 417.273 132.543 410.54C131.219 403.806 129.066 395.787 127.614 389.954C126.161 384.122 125.41 380.475 123.578 375.256C121.746 370.037 118.833 363.245 115.715 357.346C112.598 351.447 109.275 346.441 106.392 342.553C103.508 338.665 101.064 335.896 98.3938 333.225C95.7235 330.553 92.8276 327.979 88.3443 327.074C83.8611 326.17 77.7904 326.934 72.4866 328.75C67.1826 330.565 62.6453 333.431 58.6409 336.749C54.6366 340.067 51.1653 343.837 48.4207 348.369C45.6759 352.902 43.6577 358.196 42.0386 362.959C40.4193 367.723 39.1991 371.955 38.5794 376.068C37.9598 380.182 37.9408 384.176 39.4055 388.675C40.8704 393.174 43.8191 398.179 47.4837 401.455C51.1485 404.732 55.5293 406.28 61.7661 406.971C68.003 407.662 76.0957 407.496 82.0205 406.849C87.9454 406.202 91.7025 405.074 96.7293 403.605C101.756 402.136 108.053 400.325 115.205 397.642C122.357 394.959 130.363 391.403 138.149 387.297C145.936 383.19 153.502 378.533 159.982 373.888C166.461 369.242 171.854 364.609 176.472 359.884C181.089 355.16 184.931 350.344 189.783 344.472C194.636 338.601 200.5 331.673 204.349 326.754C208.198 321.836 210.033 318.927 212.542 314.712C215.051 310.497 218.234 304.975 221.876 298.655C225.518 292.335 229.619 285.216 232.191 280.037C234.762 274.858 235.804 271.618 237.526 267.248C239.248 262.877 241.651 257.375 243.48 252.947C245.308 248.518 246.562 245.163 247.821 240.939C249.079 236.715 250.341 231.623 251.913 226.189C253.484 220.754 255.365 214.978 256.565 209.589C257.766 204.2 258.286 199.2 258.213 194.077C258.141 188.954 257.474 183.708 256.167 178.153C254.86 172.597 252.913 166.732 250.364 161.549C247.815 156.367 244.664 151.868 240.926 147.566C237.188 143.265 232.863 139.162 228.921 136.198C224.98 133.234 221.421 131.41 217.87 130.499C214.319 129.587 210.774 129.587 207.423 131.266C204.071 132.945 200.912 136.304 198.513 139.882C196.115 143.46 194.478 147.257 193.493 151.044C192.508 154.83 192.175 158.607 192.008 162.383C191.842 166.158 191.842 169.933 192.631 173.994C193.42 178.054 194.998 182.4 197.696 186.734C200.394 191.069 204.211 195.393 208.608 199.043C213.005 202.694 217.982 205.67 223.267 208.257C228.552 210.844 234.144 213.041 240.782 215.082C247.419 217.124 255.102 219.011 263.347 220.055C271.592 221.099 280.4 221.3 289.399 221.401C298.398 221.501 307.587 221.502 314.93 221.169C322.273 220.835 327.768 220.169 334.822 218.714C341.876 217.258 350.487 215.012 357.305 213.202C364.122 211.392 369.145 210.017 375.977 207.953C382.809 205.89 391.45 203.139 397.71 201.286C403.97 199.432 407.848 198.478 413.207 196.649C418.566 194.821 425.405 192.118 431.92 189.225C438.436 186.333 444.628 183.251 449.386 180.096C454.144 176.942 457.467 173.716 460.787 169.94C464.108 166.164 467.426 161.839 470.136 157.508C472.845 153.178 474.947 148.842 476.605 144.841C478.263 140.84 479.477 137.173 480.084 133.608C480.691 130.042 480.691 126.577 479.374 122.942C478.056 119.306 475.421 115.5 472.05 112.583C468.68 109.666 464.574 107.637 460.061 106.456C455.548 105.276 450.629 104.943 446.448 104.943C442.267 104.943 438.824 105.276 435.679 106.348C432.534 107.42 429.688 109.231 426.711 111.43C423.734 113.629 420.626 116.216 417.814 119.647C415.001 123.079 412.484 127.355 410.564 131.393C408.645 135.431 407.324 139.231 405.618 144.385C403.913 149.539 401.823 156.047 400.778 162.59C399.733 169.133 399.733 175.71 399.733 181.961C399.733 188.211 399.733 194.134 400.233 201.086C400.733 208.038 401.732 216.018 403.262 223.576C404.793 231.134 406.853 238.27 408.992 244.878C411.13 251.487 413.347 257.57 416.646 263.825C419.946 270.08 424.328 276.507 429.129 282.941C433.93 289.374 439.15 295.813 444.363 301.773C449.576 307.734 454.783 313.216 459.565 318.226C464.346 323.235 468.703 327.772 472.534 331.934C476.364 336.096 479.668 339.883 482.879 343.365C486.09 346.847 489.208 350.023 492.484 353.298C495.761 356.574 499.196 359.948 502.993 362.832C506.789 365.717 510.946 368.112 514.386 370.551C517.826 372.991 520.549 375.475 523.483 377.952C526.417 380.43 529.562 382.901 532.723 385.263C535.884 387.625 539.061 389.879 542.237 392.132" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M327.137 316.769C321.426 325.524 315.714 334.278 312.049 340.227C308.384 346.177 306.767 349.321 305.291 352.833C303.816 356.344 302.483 360.223 300.798 364.456C299.113 368.69 297.076 373.279 294.679 378.724C292.282 384.17 289.527 390.473 286.817 395.57C284.107 400.667 281.444 404.558 279.51 408.218C277.575 411.879 276.37 415.31 274.817 419.147C273.265 422.984 271.365 427.228 269.078 431.395C266.792 435.561 264.119 439.651 261.904 443.346C259.689 447.041 257.931 450.342 256.051 454.162C254.17 457.982 252.167 462.321 249.922 466.23C247.678 470.138 245.192 473.616 243.028 476.943C240.864 480.269 239.021 483.444 237.434 486.859C235.847 490.275 234.517 493.931 233.186 497.588" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M371.874 346.228C366.876 353.222 361.879 360.215 356.163 368.923C350.448 377.632 344.015 388.055 336.259 400.464C328.504 412.873 319.427 427.268 313.062 437.369C306.698 447.469 303.046 453.274 299.411 459.231C295.776 465.188 292.157 471.296 289.227 475.654C286.298 480.013 284.057 482.621 281.933 485.446C279.808 488.271 277.8 491.313 275.791 494.355" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M246.179 351.379C251.51 358.372 256.841 365.366 261.187 370.392C265.534 375.418 268.896 378.478 272.514 381.285C276.131 384.092 280.004 386.647 283.276 389.403C286.549 392.159 289.221 395.116 292.037 397.407C294.852 399.699 297.811 401.324 301.047 403.033C304.283 404.742 307.796 406.534 311.881 408.309C315.965 410.083 320.621 411.841 325.272 413.626C329.924 415.412 334.571 417.226 339.16 418.908C343.75 420.59 348.281 422.14 352.771 423.351C357.26 424.562 361.708 425.436 365.797 426.372C369.886 427.308 373.616 428.307 377.275 429.14C380.933 429.972 384.52 430.638 388.272 431.138C392.024 431.638 395.942 431.971 399.773 432.47C403.604 432.97 407.349 433.636 410.938 433.969C414.526 434.302 417.959 434.302 421.392 434.302" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M246.179 403.33C253.509 408.326 260.839 413.321 266.003 417.377C271.167 421.432 274.165 424.548 277.413 427.295C280.66 430.041 284.157 432.419 287.489 434.525C290.82 436.63 293.987 438.463 297.185 440.379C300.384 442.294 303.614 444.292 307.117 446.128C310.619 447.964 314.393 449.638 318.501 450.97C322.608 452.302 327.05 453.293 331.376 454.288C335.703 455.282 339.916 456.281 343.855 457.28C347.793 458.28 351.458 459.279 355.101 460.111C358.744 460.944 362.365 461.61 366.413 462.276C370.461 462.942 374.937 463.608 378.874 464.274C382.81 464.94 386.208 465.606 389.605 466.272" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M542.237 316.769C547.105 327.68 551.972 338.59 555.932 345.836C559.891 353.081 562.943 356.662 566.312 360.17C569.68 363.679 573.366 367.115 577.022 370.289C580.679 373.463 584.306 376.374 587.629 378.733C590.951 381.092 593.969 382.899 597.421 384.302C600.874 385.705 604.761 386.704 608.508 387.204C612.256 387.703 615.863 387.703 619.352 387.354C622.841 387.005 626.211 386.307 629.584 385.014C632.958 383.721 636.335 381.835 639.339 379.379C642.343 376.924 644.973 373.9 647.915 369.773C650.856 365.645 654.109 360.413 656.317 355.972C658.525 351.531 659.688 347.88 660.324 343.809C660.96 339.738 661.067 335.247 661.121 330.258C661.175 325.269 661.175 319.782 660.373 314.074C659.57 308.367 657.964 302.44 656.465 297.364C654.966 292.289 653.573 288.065 652.71 287.999C651.847 287.934 651.514 292.025 652.364 295.735C653.215 299.445 655.249 302.772 657.208 306.007C659.167 309.243 661.051 312.386 663.198 315.826C665.346 319.266 667.758 323.003 670.047 326.207C672.336 329.411 674.502 332.082 677.013 335.095C679.524 338.108 682.382 341.464 685.33 344.084C688.278 346.704 691.317 348.587 694.604 350.073C697.89 351.559 701.424 352.647 705.36 353.524C709.295 354.401 713.633 355.067 718.788 355.233C723.944 355.4 729.916 355.067 735.12 353.723C740.325 352.38 744.762 350.025 748.814 347.515C752.865 345.005 756.531 342.34 759.803 339.402C763.075 336.465 765.953 333.255 769.283 329.43C772.613 325.605 776.395 321.166 779.388 316.617C782.38 312.069 784.583 307.411 786.296 302.916C788.008 298.422 789.23 294.091 789.784 289.93C790.338 285.769 790.223 281.778 789.556 277.291C788.888 272.803 787.669 267.82 786.117 263.223C784.566 258.626 782.683 254.416 780.317 250.152C777.951 245.887 775.102 241.569 771.989 238.093C768.876 234.617 765.499 231.984 762.059 229.918C758.618 227.851 755.114 226.353 751.825 227.138C748.537 227.924 745.466 230.993 743.22 234.988C740.974 238.983 739.555 243.903 738.845 248.391C738.135 252.879 738.135 256.935 738.532 261.522C738.929 266.108 739.723 271.224 740.73 275.539C741.736 279.854 742.954 283.366 744.338 287.12C745.723 290.874 747.272 294.87 749.007 299.336C750.741 303.803 752.66 308.74 754.877 312.723C757.093 316.706 759.608 319.735 762.531 321.195C765.454 322.656 768.786 322.548 771.284 320.35C773.783 318.153 775.449 313.865 776.448 309.437C777.448 305.009 777.781 300.44 778.281 295.966C778.78 291.492 779.447 287.113 779.946 283.221C780.446 279.329 780.779 275.924 782.671 277.17C784.562 278.416 788.012 284.313 790.68 290.54C793.349 296.767 795.237 303.325 797.183 310.374C799.129 317.422 801.132 324.962 803.073 332.882C805.013 340.803 806.891 349.106 808.051 356.476C809.212 363.847 809.654 370.285 810.042 375.886C810.431 381.487 810.764 386.25 811.263 390.569C811.763 394.889 812.43 398.765 812.929 402.793C813.429 406.821 813.762 410.999 814.095 415.182C814.428 419.365 814.762 423.551 815.095 427.738" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M820.593 226.926C822.925 234.253 825.257 241.579 827.272 247.091C829.287 252.602 830.986 256.298 832.485 260.104C833.984 263.91 835.284 267.827 836.767 271.557C838.25 275.287 839.916 278.831 842.11 282.214C844.305 285.596 847.027 288.818 849.959 291.232C852.89 293.647 856.029 295.254 859.331 295.87C862.634 296.487 866.101 296.112 869.166 294.468C872.232 292.824 874.898 289.911 877.338 286.884C879.779 283.857 881.995 280.716 884.066 276.722C886.136 272.728 888.061 267.882 889.799 263.211C891.538 258.54 893.09 254.045 894.518 249.734C895.946 245.424 897.249 241.298 898.539 237.458C899.829 233.618 901.105 230.064 901.605 226.489C902.105 222.913 901.827 219.316 901.689 215.509C901.55 211.701 901.55 207.683 901.717 203.215C901.884 198.746 902.217 193.827 902.383 193.135C902.55 192.444 902.55 195.98 902.55 199.433C902.55 202.887 902.55 206.257 902.55 210.657C902.55 215.058 902.55 220.487 902.55 225.07C902.55 229.652 902.55 233.386 902.55 237.709C902.55 242.031 902.55 246.941 903.05 251.619C903.549 256.296 904.549 260.742 905.558 264.757C906.568 268.772 907.588 272.357 909.775 274.805C911.962 277.253 915.317 278.565 918.958 278.645C922.598 278.725 926.525 277.574 930.078 275.87C933.631 274.167 936.81 271.912 939.379 268.879C941.947 265.847 943.905 262.037 945.744 257.829C947.583 253.621 949.304 249.015 951.689 242.749C954.074 236.482 957.124 228.554 959.809 220.771C962.494 212.988 964.815 205.351 967.039 198.075C969.262 190.8 971.387 183.886 973.483 176.764C975.579 169.642 977.646 162.311 979.811 155.87C981.977 149.429 984.241 143.877 985.54 139.397C986.839 134.917 987.172 131.509 987.506 131.956C987.839 132.403 988.172 136.704 988.338 141.332C988.505 145.96 988.505 150.914 989.005 155.999C989.505 161.084 990.504 166.301 991.301 170.912C992.098 175.522 992.692 179.528 993.673 183.582C994.655 187.637 996.023 191.742 996.892 195.498C997.761 199.254 998.131 202.661 998.815 206.102C999.499 209.543 1000.5 213.017 1001 216.639C1001.5 220.261 1001.5 224.031 1000.98 227.802C1000.47 231.573 999.432 235.345 998.599 238.947C997.766 242.549 997.134 245.982 996.151 249.437C995.168 252.893 993.836 256.373 992.336 259.834C990.837 263.294 989.171 266.734 987.506 270.175" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M987.506 270.175C996.168 264.846 1004.83 259.518 1010.84 255.569C1016.85 251.621 1020.2 249.051 1023.02 245.918C1025.84 242.783 1028.12 239.084 1031.33 233.94C1034.54 228.795 1038.69 222.205 1042.47 215.367C1046.24 208.53 1049.63 201.445 1052.88 193.854C1056.13 186.264 1059.24 178.169 1062.18 170.067C1065.12 161.964 1067.9 153.855 1069.75 145.8C1071.61 137.745 1072.53 129.743 1073.33 120.774C1074.13 111.804 1074.79 101.867 1075.29 95.162C1075.79 88.4573 1076.13 84.9857 1076.46 79.9702C1076.79 74.9547 1077.13 68.3953 1077.46 61.9608C1077.79 55.5262 1078.13 49.2164 1077.96 43.7987C1077.79 38.381 1077.13 33.8554 1074.92 31.9796C1072.71 30.1037 1068.96 30.8776 1066.47 33.5009C1063.99 36.1243 1062.77 40.5971 1061.64 44.7383C1060.51 48.8795 1059.47 52.6889 1058.79 57.6941C1058.11 62.6993 1057.79 68.9002 1057.46 74.5504C1057.14 80.2007 1056.8 85.3003 1056.64 91.1798C1056.47 97.0592 1056.47 103.719 1056.64 109.704C1056.8 115.69 1057.14 121.002 1057.47 125.766C1057.8 130.53 1058.14 134.746 1058.8 139.072C1059.47 143.399 1060.47 147.835 1061.52 151.828C1062.56 155.821 1063.66 159.37 1064.49 162.858C1065.33 166.347 1065.9 169.774 1066.51 173.246C1067.13 176.719 1067.8 180.237 1068.88 183.994C1069.96 187.751 1071.46 191.747 1072.79 195.411C1074.13 199.074 1075.29 202.404 1076.54 205.746C1077.79 209.088 1079.12 212.442 1080.46 215.689C1081.79 218.936 1083.12 222.076 1084.91 225.096C1086.69 228.116 1088.92 231.015 1091.59 233.846C1094.25 236.677 1097.35 239.439 1100.45 242.201" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M1100.45 242.201C1110.11 239.203 1119.77 236.206 1125.98 233.476C1132.2 230.745 1134.96 228.282 1138.06 224.045C1141.16 219.808 1144.6 213.798 1146.93 208.822C1149.26 203.845 1150.47 199.903 1151.82 194.285C1153.17 188.668 1154.66 181.376 1155.45 175.096C1156.24 168.816 1156.33 163.549 1156.37 158.659C1156.42 153.77 1156.42 149.257 1155.17 145.427C1153.92 141.597 1151.42 138.448 1148.76 139.274C1146.09 140.1 1143.26 144.901 1141.84 149.14C1140.43 153.38 1140.43 157.058 1140.43 160.736" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M1140.43 160.736C1139.76 168.729 1139.09 176.722 1138.43 182.715C1137.76 188.708 1137.09 192.702 1136.59 196.361C1136.1 200.02 1135.76 203.343 1136.26 206.841C1136.76 210.339 1138.09 214.011 1139.43 217.684" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M1139.43 217.684C1144.42 223.345 1149.42 229.007 1154 230.092C1158.58 231.177 1162.74 227.686 1165.55 224.061C1168.36 220.436 1169.83 216.676 1171.25 212.926C1172.67 209.177 1174.04 205.438 1175.62 201.838C1177.2 198.238 1179 194.777 1180.31 190.695C1181.63 186.613 1182.45 181.91 1183.39 177.313C1184.32 172.716 1185.36 168.225 1186.62 163.709C1187.88 159.192 1189.35 154.65 1190.35 150.584C1191.35 146.518 1191.87 142.928 1193.61 142.748C1195.34 142.568 1198.28 145.8 1200.52 149.692C1202.77 153.585 1204.32 158.139 1205.37 162.135C1206.42 166.131 1206.98 169.568 1207.7 173.304C1208.42 177.039 1209.3 181.073 1209.95 185.209C1210.59 189.346 1210.99 193.586 1212.4 193.392C1213.81 193.199 1216.23 188.573 1219.27 182.043C1222.31 175.513 1225.97 167.08 1229.12 159.5C1232.26 151.92 1234.89 145.194 1237.14 139.924C1239.38 134.654 1241.25 130.84 1243.56 127.725C1245.87 124.609 1248.62 122.192 1252.02 122.415C1255.43 122.638 1259.49 125.501 1263.24 128.207C1266.99 130.914 1270.43 133.464 1273.55 136.182C1276.67 138.9 1279.47 141.786 1282.31 144.171C1285.16 146.557 1288.04 148.443 1290.89 150.53C1293.73 152.618 1296.54 154.907 1299.34 157.197" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M542.237 466.272C549.234 463.275 556.23 460.278 562.633 457.536C569.037 454.795 574.847 452.309 581.483 450.422C588.119 448.534 595.58 447.246 601.713 445.886C607.847 444.526 612.653 443.095 617.82 441.575C622.987 440.055 628.515 438.446 633.526 437.039C638.538 435.633 643.035 434.429 651.311 431.915C659.588 429.402 671.645 425.578 680.738 422.862C689.831 420.146 695.96 418.539 703.851 416.239C711.741 413.939 721.394 410.946 728.82 408.445C736.246 405.945 741.445 403.935 748.989 401.681C756.533 399.426 766.421 396.926 774.019 394.821C781.617 392.716 786.925 391.006 794.953 388.584C802.98 386.161 813.728 383.026 821.87 380.536C830.011 378.046 835.546 376.202 846.109 372.806C856.672 369.41 872.263 364.462 883.931 360.463C895.598 356.464 903.342 353.414 915.024 349.128C926.705 344.842 942.325 339.32 953.967 335.497C965.61 331.673 973.277 329.548 985.208 326.397C997.14 323.247 1013.34 319.071 1025.02 315.971C1036.71 312.871 1043.89 310.846 1055.04 307.475C1066.2 304.105 1081.34 299.389 1092.52 295.74C1103.7 292.092 1110.93 289.512 1122.09 285.478C1133.26 281.444 1148.37 275.957 1159.4 271.914C1170.43 267.871 1177.39 265.274 1186.61 261.889C1195.83 258.505 1207.32 254.334 1215.78 251.119C1224.23 247.905 1229.64 245.646 1237.87 242.336C1246.09 239.026 1257.12 234.664 1265 231.712C1272.88 228.759 1277.6 227.217 1283.26 224.723C1288.93 222.23 1295.55 218.786 1301.66 215.917C1307.77 213.049 1313.38 210.755 1317.82 209.117C1322.26 207.479 1325.54 206.496 1329.51 205.007C1333.48 203.518 1338.14 201.523 1342.18 199.755C1346.21 197.988 1349.63 196.449 1353.05 194.737C1356.48 193.025 1359.92 191.14 1363.53 189.422C1367.14 187.703 1370.92 186.151 1374.88 184.365C1378.83 182.578 1382.96 180.558 1387.22 178.467C1391.48 176.375 1395.88 174.212 1399.88 172.355C1403.88 170.497 1407.49 168.946 1411.18 167.394C1414.87 165.842 1418.64 164.289 1422.48 162.664C1426.32 161.04 1430.23 159.344 1433.79 157.941C1437.35 156.538 1440.56 155.429 1444.16 154.249C1447.77 153.068 1451.76 151.816 1455.43 150.358C1459.09 148.899 1462.42 147.234 1465.76 145.569" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M1018.86 104.943C1027.19 102.278 1035.52 99.6143 1041.76 97.5101C1048 95.4059 1052.15 93.8617 1056.43 92.4574C1060.72 91.0532 1065.15 89.7888 1069.5 88.5383C1073.85 87.2879 1078.13 86.0515 1082.41 84.625C1086.68 83.1986 1090.95 81.5822 1095.03 79.9415C1099.1 78.3007 1102.97 76.6356 1106.9 75.3035C1110.83 73.9714 1114.82 72.9723 1118.52 71.9733C1122.21 70.9742 1125.62 69.9751 1129.02 68.976" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M1140.43 104.943C1148.09 102.945 1155.75 100.946 1161.42 99.6143C1167.08 98.2822 1170.74 97.6161 1174.41 96.9501" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              </g>
              </svg>
            </div>
          </div>
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
      </Container>
      </section>
      <section className="Summary">
      <Container>
        <Row>
          <Col sm={2}>
          </Col>
          <Col sm={8}>
          <h1>Summary</h1>
          <p align={"justify"}>Knowledgeable engineering student with solid grasp of
                               development, implementation and optimization of controller
                               circuits. Able to apply core concepts and theories of electrical
                               engineering to design planning and layout optimization.
                               Ready to bring two years' experience to dynamic position in
                               fast-paced environment.</p>
          </Col>
          <Col sm={2}>
          </Col>
        </Row>
      </Container>
      <div className="title">
        </div>
      </section>

      <section className="Timeline">
      <Container>
        <Row>
          <Col sm={2}>
          </Col>
          <Col sm={8}>
            <h1>Timeline</h1>
          </Col>
          <Col sm={2}>
          </Col>
        </Row>
        <Row>
        <Col sm={5}>
        <p align={"justify"}>Knowledgeable engineering student with solid grasp of
                             development, implementation and optimization of controller
                             circuits. Able to apply core concepts and theories of electrical
                             engineering to design planning and layout optimization.
                             Ready to bring two years' experience to dynamic position in
                             fast-paced environment.</p>
        </Col>
        <Col sm={2}>
        </Col>
        <Col sm={5}>
        <p align={"justify"}>Knowledgeable engineering student with solid grasp of
                             development, implementation and optimization of controller
                             circuits. Able to apply core concepts and theories of electrical
                             engineering to design planning and layout optimization.
                             Ready to bring two years' experience to dynamic position in
                             fast-paced environment.</p>
        </Col>
        </Row>
      </Container>
      <div className="title">
        </div>
      </section>
  </div>
  );
}

export default Resume;
