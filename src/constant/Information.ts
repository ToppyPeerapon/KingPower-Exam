import { Moment } from 'moment'

export enum Title {
  Mr = 'MR',
  Ms = 'MS',
}

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Unisex = 'UNISEX',
}

export enum Nationality {
  AFG = 'Afghanistan',
  ALA = 'Aland Islands',
  ALB = 'Albania',
  DZA = 'Algeria',
  ASM = 'American Samoa',
  AND = 'Andorra',
  AGO = 'Angola',
  AIA = 'Anguilla',
  ATA = 'Antarctica',
  ATG = 'Antigua and Barbuda',
  ARG = 'Argentina',
  ARM = 'Armenia',
  ABW = 'Aruba',
  AUS = 'Australia',
  AUT = 'Austria',
  AZE = 'Azerbaijan',
  BHS = 'Bahamas',
  BHR = 'Bahrain',
  BGD = 'Bangladesh',
  BRB = 'Barbados',
  BLR = 'Belarus',
  BEL = 'Belgium',
  BLZ = 'Belize',
  BEN = 'Benin',
  BMU = 'Bermuda',
  BTN = 'Bhutan',
  BOL = 'Bolivia',
  BIH = 'Bosnia and Herzegovina',
  BWA = 'Botswana',
  BVT = 'Bouvet Island',
  BRA = 'Brazil',
  IOT = 'British Indian Ocean Territory',
  BRN = 'Brunei Darussalam',
  BGR = 'Bulgaria',
  BFA = 'Burkina Faso',
  BDI = 'Burundi',
  KHM = 'Cambodia',
  CMR = 'Cameroon',
  CAN = 'Canada',
  CPV = 'Cape Verde',
  CYM = 'Cayman Islands',
  CAF = 'Central African Republic',
  TCD = 'Chad',
  CHL = 'Chile',
  CHN = 'China',
  CXR = 'Christmas Island',
  CCK = 'Cocos Keeling Islands',
  COL = 'Colombia',
  COM = 'Comoros',
  COG = 'Congo',
  COD = 'Congo Democratic Republic',
  COK = 'Cook Islands',
  CRI = 'Costa Rica',
  CIV = "Cote D'Ivoire",
  HRV = 'Croatia',
  CUB = 'Cuba',
  CYP = 'Cyprus',
  CZE = 'CzechRepublic',
  DNK = 'Denmark',
  DJI = 'Djibouti',
  DMA = 'Dominica',
  DOM = 'Dominican Republic',
  ECU = 'Ecuador',
  EGY = 'Egypt',
  SLV = 'El Salvador',
  GNQ = 'Equatorial Guinea',
  ERI = 'Eritrea',
  ESE = 'Estonia',
  ETH = 'Ethiopia',
  FLK = 'Falkland Islands',
  FRO = 'Faroe Islands',
  FJI = 'Fiji',
  FIN = 'Finland',
  FRA = 'France',
  GUF = 'French Guiana',
  PYF = 'French Polynesia',
  ATF = 'French Southern Territories',
  GAB = 'Gabon',
  GMB = 'Gambia',
  GEO = 'Georgia',
  DEU = 'Germany',
  GHA = 'Ghana',
  GIB = 'Gibraltar',
  GRC = 'Greece',
  GRL = 'Greenland',
  GRD = 'Grenada',
  GLP = 'Guadeloupe',
  GUM = 'Guam',
  GTM = 'Guatemala',
  GGY = 'Guernsey',
  GIN = 'Guinea',
  GNB = 'Guinea Bissau',
  GUY = 'Guyana',
  HTI = 'Haiti',
  HMD = 'Heard Island Mcdonald Islands',
  VAT = 'Holy See Vatican City State',
  HND = 'Honduras',
  HKG = 'HongKong',
  HUN = 'Hungary',
  ISL = 'Iceland',
  IND = 'India',
  IDN = 'Indonesia',
  IRN = 'Iran',
  IRQ = 'Iraq',
  IRL = 'Ireland',
  IMN = 'Isle Of Man',
  ISR = 'Israel',
  ITA = 'Italy',
  JAM = 'Jamaica',
  JPN = 'Japan',
  JEY = 'Jersey',
  JOR = 'Jordan',
  KAZ = 'Kazakhstan',
  KEN = 'Kenya',
  KIR = 'Kiribati',
  KOR = 'Korea, Republic of',
  PRK = "Korea, Democratic People's Republic of",
  KWT = 'Kuwait',
  KGZ = 'Kyrgyzstan',
  LAO = 'Lao Peoples Democratic Republic',
  LVA = 'Latvia',
  LBN = 'Lebanon',
  LSO = 'Lesotho',
  LBR = 'Liberia',
  LBY = 'Libyan Arab Jamahiriya',
  LIE = 'Liechtenstein',
  LTU = 'Lithuania',
  LUX = 'Luxembourg',
  MAC = 'Macao',
  MDG = 'Madagascar',
  MWI = 'Malawi',
  MYS = 'Malaysia',
  MDV = 'Maldives',
  MLI = 'Mali',
  MLT = 'Malta',
  MHL = 'Marshall Islands',
  MTQ = 'Martinique',
  MRT = 'Mauritania',
  MUS = 'Mauritius',
  MYT = 'Mayotte',
  MEX = 'Mexico',
  FSM = 'Micronesia',
  MDA = 'Moldova',
  MCO = 'Monaco',
  MNG = 'Mongolia',
  MNE = 'Montenegro',
  MSR = 'Montserrat',
  MAR = 'Morocco',
  MOZ = 'Mozambique',
  MMR = 'Myanmar',
  NAM = 'Namibia',
  NRU = 'Nauru',
  NPL = 'Nepal',
  NLD = 'Netherlands',
  NCL = 'New Caledonia',
  NZL = 'New Zealand',
  NIC = 'Nicaragua',
  NER = 'Niger',
  NGA = 'Nigeria',
  NIU = 'Niue',
  NFK = 'Norfolk Island',
  MNP = 'Northern Mariana Islands',
  NOR = 'Norway',
  OMN = 'Oman',
  PAK = 'Pakistan',
  PLW = 'Palau',
  PSE = 'Palestinian Territory',
  PAN = 'Panama',
  PNG = 'Papua New Guinea',
  PRY = 'Paraguay',
  PER = 'Peru',
  PHL = 'Philippines',
  PCN = 'Pitcairn',
  POL = 'Poland',
  PRT = 'Portugal',
  PRI = 'Puerto Rico',
  QAT = 'Qatar',
  MKD = 'Republic of North Macedonia',
  REU = 'Réunion',
  ROU = 'Romania',
  RUS = 'Russian Federation',
  RWA = 'Rwanda',
  BLM = 'Saint Barthelemy',
  SHN = 'Saint Helena',
  KNA = 'Saint Kitts And Nevis',
  LCA = 'Saint Lucia',
  MAF = 'Saint Martin',
  SPM = 'Saint Pierre And Miquelon',
  VCT = 'Saint Vincent And Grenadines',
  WSM = 'Samoa',
  SMR = 'San Marino',
  STP = 'Sao Tome And Principe',
  SAU = 'Saudi Arabia',
  SEN = 'Senegal',
  SRB = 'Serbia',
  SYC = 'Seychelles',
  SLE = 'Sierra Leone',
  SGP = 'Singapore',
  SMX = 'Sint Maarten (Dutch part)',
  SVK = 'Slovakia',
  SVN = 'Slovenia',
  SLB = 'Solomon Islands',
  SOM = 'Somalia',
  ZAF = 'South Africa',
  SGS = 'South Georgia And Sandwich Island',
  SSD = 'South Sudan',
  ESP = 'Spain',
  LKA = 'Sri Lanka',
  SDN = 'Sudan',
  SUR = 'Suriname',
  SJM = 'Svalbard And Jan Mayen',
  SWZ = 'Swaziland',
  SWE = 'Sweden',
  CHE = 'Switzerland',
  SYR = 'Syrian Arab Republic',
  TWN = 'Taiwan',
  TJK = 'Tajikistan',
  TZA = 'Tanzania',
  THA = 'Thailand',
  TLS = 'Timor-Leste',
  TGO = 'Togo',
  TKL = 'Tokelau',
  TON = 'Tonga',
  TTO = 'Trinidad And Tobago',
  TUN = 'Tunisia',
  TUR = 'Turkey',
  TKM = 'Turkmenistan',
  TCA = 'Turks And Caicos Islands',
  TUV = 'Tuvalu',
  UGA = 'Uganda',
  UKR = 'Ukraine',
  ARE = 'United Arab Emirates',
  GBR = 'United Kingdom',
  UMI = 'United States Outlying Islands',
  USA = 'United States',
  URY = 'Uruguay',
  UZB = 'Uzbekistan',
  VUT = 'Vanuatu',
  VEN = 'Venezuela',
  VNM = 'Vietnam',
  VGB = 'Virgin Islands British',
  VIR = 'Virgin Islands US',
  WLF = 'Wallis And Futuna',
  ESH = 'Western Sahara',
  YEM = 'Yemen',
  ZMB = 'Zambia',
  ZWE = 'Zimbabwe',
}

export enum PhoneCode {
  Thai = '+66',
}

export type Info = {
  id: string
  title: Title
  firstName: string
  lastName: string
  birthday: Moment
  nationality?: Nationality
  citizenId?: string
  gender?: Gender
  mobileCode: PhoneCode
  mobilePhone: string
  passportNo?: string
  expectSalary: string
}
