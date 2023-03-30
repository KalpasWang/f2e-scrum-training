import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Common';
import { EndingData } from '../../shared/types';

type Props = {
  stageData: EndingData;
  onComplete: () => void;
};

export const EndingStage = ({ stageData, onComplete }: Props) => {
  const variants = {
    initial: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
    yoyo: (custom: number) => ({
      y: [0, -50, 0],
      transition: {
        delay: custom * 0.4,
        duration: 1,
        times: [0, 0.5, 1],
        ease: 'easeOut',
        repeat: Infinity,
      },
    }),
  };

  return (
    <div className="h-full">
      <div className="relative mt-4">
        <motion.p
          custom={7}
          initial="initial"
          animate="visible"
          variants={variants}
          className="top-[20%] left-[57%] z-10 text-center text-3xl text-assist1 md:absolute md:text-left"
          dangerouslySetInnerHTML={{ __html: stageData.text }}
        ></motion.p>
        <svg
          className="w-full"
          viewBox="0 -50 1200 815"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="family">
            <motion.path
              id="floor"
              custom={1}
              initial="initial"
              animate="visible"
              variants={variants}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M582.345 498.238C734.644 492.279 1000.6 468.681 1107.19 509.259C1186.6 539.491 1209.58 576.703 1196.6 623.977C1184.54 667.884 1066.27 701.935 963.223 712.145C858.036 722.567 746.873 701.033 612.149 701.935C473.718 702.861 301.393 711.44 194.397 685.094C75.8521 655.904 -9.93514 623.762 0.927282 577.889C11.4755 533.344 159.855 487.556 275.666 487.556C376.248 487.556 449.25 503.445 582.345 498.238Z"
              fill="#E0E0E0"
            />
            <motion.g
              id="king"
              custom={2}
              initial="initial"
              animate={['visible', 'yoyo']}
              variants={variants}
            >
              <path
                id="Vector_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M309.986 55.2804C216.553 59.8197 121.956 84.0717 63.4255 157.041C4.71551 230.235 -18.9445 333.867 17.0064 420.537C46.8566 492.5 89.1638 530.254 175.356 556C252.356 579 353.356 578.5 441.856 572.5C557.356 550 625.859 514.021 656.357 420.537C689.632 318.541 660.486 211.115 588.537 131.529C520.616 56.3984 411.148 50.3655 309.986 55.2804Z"
                fill="#5137FF"
              />
              <rect
                id="New Piskel 1"
                width="145"
                height="94"
                transform="matrix(-1 0 0 1 441.895 0)"
                fill="url(#pattern0)"
              />
              <circle
                id="Ellipse 6"
                r="10"
                transform="matrix(-1 0 0 1 551.895 184)"
                fill="#FFF9F6"
              />
              <circle
                id="Ellipse 7"
                r="10"
                transform="matrix(-1 0 0 1 481.895 204)"
                fill="#FFF9F6"
              />
            </motion.g>
            <motion.g
              custom={3}
              initial="initial"
              animate={['visible', 'yoyo']}
              variants={variants}
              id="po"
            >
              <path
                id="Vector_3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M359.286 434.028C391.744 435.116 394.103 470.651 413.905 493.94C430.733 513.731 447.503 526.071 454.52 549.163C463.237 577.848 467.624 601.577 448.852 626.003C427.53 653.746 398.391 656 359.286 656C323.2 656 287.616 653.644 268.42 626.003C253.222 604.12 252.343 574.854 255.439 549.163C258.096 527.118 269.424 506.047 283.415 487.838C301.899 463.781 326.92 432.943 359.286 434.028Z"
                fill="#FF60FA"
              />
              <ellipse
                id="Ellipse 6_2"
                rx="4.47584"
                ry="4.46806"
                transform="matrix(-1 0 0 1 367.558 494.35)"
                fill="#FFF9F6"
              />
              <ellipse
                id="Ellipse 7_2"
                rx="4.47584"
                ry="4.46806"
                transform="matrix(-1 0 0 1 340.704 496.137)"
                fill="#FFF9F6"
              />
              <path
                id="Ellipse 9 (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M360.396 508.541C359.844 508.541 359.396 508.989 359.396 509.541C359.396 511.208 358.042 512.562 356.368 512.562C354.694 512.562 353.34 511.208 353.34 509.541C353.34 508.989 352.892 508.541 352.34 508.541C351.788 508.541 351.34 508.989 351.34 509.541C351.34 512.316 353.593 514.562 356.368 514.562C359.144 514.562 361.396 512.316 361.396 509.541C361.396 508.989 360.949 508.541 360.396 508.541Z"
                fill="#FFF9F6"
              />
              <rect
                id="New Piskel (1) 1"
                x="322.609"
                y="446.957"
                width="67.1376"
                height="29.936"
                fill="url(#pattern1)"
              />
            </motion.g>
            <motion.g
              custom={4}
              initial="initial"
              animate={['visible', 'yoyo']}
              variants={variants}
              id="sm"
            >
              <path
                id="Vector_4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M820.616 426.427C852.044 431.441 854.585 475.457 871.536 502.408C882.266 519.467 894.989 534.034 900.493 553.422C908.971 583.286 915.972 617.804 896.449 641.931C876.916 666.071 851.65 651.516 820.616 652.138C788.433 652.783 757.997 665.146 735.683 641.931C713.41 618.758 713.887 585.218 718.657 553.422C722.433 528.252 741.243 505.577 756.474 485.192C775.153 460.19 789.809 421.511 820.616 426.427Z"
                fill="#5137FF"
              />
              <ellipse
                id="Ellipse 10"
                rx="4.47584"
                ry="4.46806"
                transform="matrix(-0.998775 -0.0494911 -0.0494911 0.998775 822.691 494.684)"
                fill="#FFF9F6"
              />
              <ellipse
                id="Ellipse 11"
                rx="4.47584"
                ry="4.46806"
                transform="matrix(-0.998775 -0.0494911 -0.0494911 0.998775 785.691 494.684)"
                fill="#FFF9F6"
              />
              <path
                id="Ellipse 12 (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M809 509C808.448 509 808 509.448 808 510C808 512.761 805.761 515 803 515C800.239 515 798 512.761 798 510C798 509.448 797.552 509 797 509C796.448 509 796 509.448 796 510C796 513.866 799.134 517 803 517C806.866 517 810 513.866 810 510C810 509.448 809.552 509 809 509Z"
                fill="#FFF9F6"
              />
              <rect
                id="New Piskel (4) 1"
                x="775"
                y="384"
                width="79"
                height="79"
                fill="url(#pattern2)"
              />
            </motion.g>
            <motion.g
              custom={5}
              initial="initial"
              animate={['visible', 'yoyo']}
              variants={variants}
              id="rd2"
            >
              <path
                id="Vector_5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M933.744 563.514C931.799 588.655 932.514 612.901 950.374 631.821C968.933 651.482 999.079 656 1027.17 656C1051.9 656 1078.83 653.997 1097.6 637.199C1116.94 619.892 1119.85 579.583 1114.84 555.864C1108.92 527.847 1098.52 509.285 1079.47 491.455C1060.37 473.584 1045.03 461.989 1017.98 462C990.932 462.011 985.016 479.939 967.595 499.235C951.825 516.701 935.505 540.739 933.744 563.514Z"
                fill="#5137FF"
              />
              <ellipse
                id="Ellipse 13"
                rx="4.47584"
                ry="4.46806"
                transform="matrix(-0.998775 -0.0494911 -0.0494911 0.998775 1027.31 513.684)"
                fill="#FFF9F6"
              />
              <ellipse
                id="Ellipse 14"
                rx="4.47584"
                ry="4.46806"
                transform="matrix(-0.998775 -0.0494911 -0.0494911 0.998775 998.691 513.684)"
                fill="#FFF9F6"
              />
              <path
                id="Ellipse 12 (Stroke)_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1019 526C1018.45 526 1018 526.448 1018 527C1018 529.761 1015.76 532 1013 532C1010.24 532 1008 529.761 1008 527C1008 526.448 1007.55 526 1007 526C1006.45 526 1006 526.448 1006 527C1006 530.866 1009.13 534 1013 534C1016.87 534 1020 530.866 1020 527C1020 526.448 1019.55 526 1019 526Z"
                fill="#FFF9F6"
              />
              <rect
                id="New Piskel (5) 1"
                x="985"
                y="409"
                width="79"
                height="79"
                fill="url(#pattern3)"
              />
            </motion.g>
            <motion.g
              custom={6}
              initial="initial"
              animate={['visible', 'yoyo']}
              variants={variants}
              id="rd1"
            >
              <path
                id="Vector_6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M690.525 561.973C692.734 586.546 695.319 613.482 675.031 631.973C653.949 651.189 619.587 657.771 587.797 655.605C558.353 653.599 530.572 648.391 509.251 631.973C487.283 615.058 482.51 580.919 488.201 557.737C494.924 530.355 506.742 512.213 528.387 494.788C550.083 477.322 567.501 465.989 598.234 466C628.958 466.011 643.502 482.534 663.293 501.393C681.207 518.463 688.524 539.715 690.525 561.973Z"
                fill="#FFCB2D"
              />
              <rect
                id="New Piskel (3) 1"
                x="560"
                y="404"
                width="69"
                height="69"
                fill="url(#pattern4)"
              />
              <ellipse
                id="Ellipse 6_3"
                rx="4.47584"
                ry="4.46806"
                transform="matrix(-0.998775 -0.0494911 -0.0494911 0.998775 620.601 518.684)"
                fill="#FFF9F6"
              />
              <ellipse
                id="Ellipse 7_3"
                rx="4.47584"
                ry="4.46806"
                transform="matrix(-0.998775 -0.0494911 -0.0494911 0.998775 593.691 519.14)"
                fill="#FFF9F6"
              />
              <path
                id="Ellipse 9 (Stroke)_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M616 531C615.448 531 615 531.448 615 532C615 534.761 612.761 537 610 537C607.239 537 605 534.761 605 532C605 531.448 604.552 531 604 531C603.448 531 603 531.448 603 532C603 535.866 606.134 539 610 539C613.866 539 617 535.866 617 532C617 531.448 616.552 531 616 531Z"
                fill="#FFF9F6"
              />
            </motion.g>
          </g>
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href="#image0_55_682"
                transform="translate(-0.3 -0.384615) scale(0.00666667 0.0102564)"
              />
            </pattern>
            <pattern
              id="pattern1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href="#image1_55_682"
                transform="translate(-0.3 -1.34328) scale(0.00666667 0.0149254)"
              />
            </pattern>
            <pattern
              id="pattern2"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href="#image2_55_682"
                transform="translate(-0.113924 -0.151899) scale(0.00511603)"
              />
            </pattern>
            <pattern
              id="pattern3"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href="#image3_55_682"
                transform="translate(-0.113924 -0.0759494) scale(0.00511603)"
              />
            </pattern>
            <pattern
              id="pattern4"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href="#image4_55_682"
                transform="translate(-0.392593 -0.385185) scale(0.00740741)"
              />
            </pattern>
            <image
              id="image0_55_682"
              data-name="New Piskel (2).png"
              width="240"
              height="240"
              href="data:image/png;base64,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"
            />
            <image
              id="image1_55_682"
              data-name="New Piskel (1).png"
              width="240"
              height="240"
              href="data:image/png;base64,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"
            />
            <image
              id="image2_55_682"
              data-name="New Piskel (4).png"
              width="240"
              height="240"
              href="data:image/png;base64,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"
            />
            <image
              id="image3_55_682"
              data-name="New Piskel (5).png"
              width="240"
              height="240"
              href="data:image/png;base64,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"
            />
            <image
              id="image4_55_682"
              data-name="New Piskel.png"
              width="240"
              height="240"
              href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
      <div className="pt-7 pb-16 text-center">
        <Button type="default" onClick={onComplete}>
          {stageData.action}
        </Button>
      </div>
    </div>
  );
};
