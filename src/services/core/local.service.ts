import { Injectable } from '@angular/core';
import { ILocale, locals, ILocalString } from './enums';

@Injectable()
export class LocalService {
  public Languages: ILocale[] = [{ code: locals.ar, text: 'العربية', Url: 'ar' }, { code: locals.en, text: 'English', Url: 'en' }]

    getlocalbykey(key: string, locale) {
        try {
            if (locale == 'en') {
                return this.Stringlocalization[key].valen;
            } else {
                return this.Stringlocalization[key].valar;

            }
        } catch (e) {
            return '';
        }
    }
    Stringlocalization: { [id: string]: ILocalString; } = {
      '': { valen: '', valar: '' },
      'back': { valen: 'Back', valar: 'العودة' },
      'More': { valen: 'More', valar: 'المزيد' },
      'Home': { valen: 'Home', valar: 'الرئيسية' },
      'Appointment': { valen: 'Appointment', valar: 'المواعيد' },
      'Offers': { valen: 'Offers', valar: 'العروض' },
      'Search': { valen: 'Search', valar: 'بحث' },
      'Language': { valen: 'Change Language', valar: 'تغيير اللغة' },

      //home page 
      'Fpage': { valen: 'Book the Best Doctors in your area', valar: "احجز أفضل الأطباء في منطقتك" },
      'btnarea': { valen: "Choose by speciality and area", valar: "اختر حسب التخصص والمنطقة" },
      'btnsbydoctor': { valen: "Search by doctor name", valar: "البحث عن طريق اسم الطبيب" },
      'btnsbyinsurance': { valen: "Search by insurance name", valar: "البحث عن طريق شركة التأمين" },
      'login': { valen: 'login', valar: 'تسجيل الدخول' },

      //login page
      'Username': { valen: 'Username', valar: 'اسم المستخدم' },
      'Usernameadd': { valen: 'Enter your username', valar: ' ادخل اسم المستخدم' },
      'Password': { valen: 'Password', valar: 'كلمة المرور' },
      'Passwordadd': { valen: 'Enter your password', valar: ' ادخل كلمة المرور' },
      'filllogin': { valen: 'Please enter your username and password', valar: 'من فضلك ادخل اسم المستخدم وكلمة السر' },

      'Or': { valen: 'Or', valar: 'أو' },

      'register': { valen: 'Register', valar: 'تسجيل' },
      'fullNameadd': { valen: 'Enter your FullName', valar: ' ادخل الاسم' },
      'fullName': { valen: 'FullName', valar: 'الاسم' },

      'phoneadd': { valen: 'Enter your phone', valar: ' ادخل رقم الهاتف' },
      'phone': { valen: 'Phone', valar: 'رقم الهاتف' },


      'Emailadd': { valen: 'someone@example.com', valar: 'someone@example.com' },
      'Email': { valen: 'Email', valar: 'البريد الالكترونى' },

      'fillregister': { valen: 'Please enter all the required information', valar: 'من فضلك ادخل جميع المعلومات المطلوبة' },
      'SelectArea': { valen: 'Select Area', valar: 'اختر المنطقة' },
      'Chdocotr': { valen: 'Choose your doctor', valar: 'اختيار الدكتور' },

      //Settings page
      'Logout': { valen: 'Logout', valar: 'تسجيل الخروج' },
      'Country': { valen: 'Change Country', valar: 'تغيير الدولة' },

      'welcomeApp': { valen: 'Welcome to doctor online', valar: 'مرحبا بك فى برنامج دكتور اونلاين' },

      //doctor List page
      'Doctor': { valen: 'Doctor', valar: 'دكتور' },
      'Rate': { valen: 'Overall rating from 0 Vistor', valar: 'التقييم العام من 0 زائر' },

      //doctor view page
      'ViewMap': { valen: 'View map', valar: 'اظهر على الخريطة' },
      'book': { valen: 'Book now and you will recieve full address details and clinic number', valar: 'احجز الآن وستتلقى تفاصيل العنوان الكامل ورقم العيادة' },
      'bookbtn': { valen: 'Book', valar: 'حجز' },
      'bookbtndisable': { valen: 'Not Avilable', valar: 'غير متاح' },
      'WTime': { valen: 'Waiting Time', valar: 'مدة الانتظار' },
      'fees': { valen: 'Fees', valar: 'الرسوم' },
      'KD': { valen: 'KD', valar: 'د.ك' },
      'patient': { valen: 'Patient', valar: 'المريض' },
      'Slot': { valen: 'Time', valar: 'الموعد' },
      'plogin': { valen: ' Please Login', valar: 'من فضلك قم بتسجيل الدخول' },
      'address': { valen: 'Adress', valar: 'العنوان' },
      'Services': { valen: 'Services', valar: 'الخدمات' },
      'Info': { valen: 'About doctor', valar: 'نبذة عن الدكتور' },

      //Profile
      'Profile': { valen: 'Profile', valar: 'الصفحة الشخصية' },
      'availability': { valen: 'Availability', valar: 'المواعيد' },
      'startDateError': { valen: 'Please Select rigth dates', valar: 'من فضلك قم بااختيار التاريخ' },
      'slotsempty': { valen: 'Please Select at leaset one slot', valar: 'من فضلك قم بااختيار على الاقل موعد واحد' },

      'Confirm': { valen: 'Confirm', valar: 'تأكيد' },
      'skip': { valen: 'skip', valar: 'تخطى' },
      'Cancel': { valen: 'Cancel', valar: 'الغاء' },
      'message': { valen: 'Are you sure you want to reserve this appointment', valar: 'هل انت متأكد من الحجز فى الموعد المحدد' },

      'MyOrders': { valen: 'My Orders', valar: 'طلباتى' },
      'MyOccasions': { valen: 'My Occasions', valar: 'مناسباتى' },
      'Qty': { valen: 'Qty', valar: 'الكمية' },
      'insurance': { valen: 'Insurance', valar: 'شركات التأمين' },

      'appsuc': { valen: 'You successfully created your appointment', valar: 'لقد اتممت حجزك بنجاح شكرا لك ' },
      'btngotoappointment': { valen: 'Go to Appointment', valar: 'الذهاب لتفاصيل الحجز' },
  };
}
