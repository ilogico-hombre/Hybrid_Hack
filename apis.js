import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IlJSVkpMOHE4RjlFVkdRUU0tMExLcnJWZnBuaUJqZE5sOHliXzlXSnY4VmMiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82N2MzNjdiMC02MjBkLTQ3ZjQtOGFhYS00OTgyM2JhN2M1NzAvIiwiaWF0IjoxNjQ4MTI5OTE4LCJuYmYiOjE2NDgxMjk5MTgsImV4cCI6MTY0ODEzNDI3MSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhUQUFBQTcxWGxFN3RVUjkxZTBmM0o3b0tJMUhTWG9QTTFXeEM1T2V3dStSTjE5bmM9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJQb3BsaSIsImdpdmVuX25hbWUiOiJIaW1hbmkiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMDMuNDguMTk3LjIxIiwibmFtZSI6IkhpbWFuaSBQb3BsaSIsIm9pZCI6IjczNzlkYTAyLTVmNTgtNDA2NS1hOGJkLTY5NTExZmUxMTFjOSIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMURCRDIxNEE2IiwicmgiOiIwLkFVWUFzR2ZEWncxaTlFZUtxa21DTzZmRmNBTUFBQUFBQUFBQXdBQUFBQUFBQUFDQUFJay4iLCJzY3AiOiJCb29raW5ncy5NYW5hZ2UuQWxsIEJvb2tpbmdzLlJlYWQuQWxsIEJvb2tpbmdzLlJlYWRXcml0ZS5BbGwgQm9va2luZ3NBcHBvaW50bWVudC5SZWFkV3JpdGUuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Ik95QmJrWTBFMHJlaTFBMXBwTjRHQWVFWF9JUnRkZEZpdHhjdHFOWW5ndmsiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiI2N2MzNjdiMC02MjBkLTQ3ZjQtOGFhYS00OTgyM2JhN2M1NzAiLCJ1bmlxdWVfbmFtZSI6ImhpbWFuaUBzZGZqYW4yNC5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJoaW1hbmlAc2RmamFuMjQub25taWNyb3NvZnQuY29tIiwidXRpIjoiVXBtVWZrU00wVTJraGhiUTRDUXRBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiZmU5MzBiZTctNWU2Mi00N2RiLTkxYWYtOThjM2E0OWEzOGIxIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJMRnJkRk1aNHZ6bEVpbVQwd0NTVkZpNlZ2dVViMFFSZnZyWFdTczQtRnlVIn0sInhtc190Y2R0IjoxNjQzMDQ1MjkxfQ.JiXTg8qWuAoYsdlF-tZpbyCXLG1NSovn-8GylObR_Ut9RiNYq76qJMsCQYGjm0CZ4Aa47secUmQvYrTuCYJ_P2t_Q3wpAdt8ozlc96XoBSNjLNeV7qxDr7cRVeLSlgqu4mb6AQtXt823-_Xf0V3DIEKv-hXRGagLzS5d8Hzl8JHdUktOuBwkZ2ewZh-cx0zIla4aq50o-SXuY7bgdAD2hrzqAY28jdoOtxdp9pOO331hlEQnpztGXD-inO48WGQqvsE_z2OOidczRoqXdJdhkQ4xbUNbiE1g6YFtMXv_nHsoTykKcer4fNXag0OV5yp3dNqHnPqzsAtjd0wED37LPw';

export const createAppointment = async (service, date, staff, customerName) => {
    const body = {
        "@odata.type": "#microsoft.graph.bookingAppointment",
        "smsNotificationsEnabled": service.smsNotificationsEnabled,
        "endDateTime": {
            "@odata.type": "#microsoft.graph.dateTimeTimeZone",
            "dateTime": `${date}T11:30:00.0000000+00:00`,
            "timeZone": "IST"
        },
        "isLocationOnline": service.isLocationOnline,
        "optOutOfCustomerEmail": false,
        "postBuffer": service.preBuffer,
        "preBuffer": service.postBuffer,
        "price": service.defaultPrice,
        "priceType@odata.type": "#microsoft.graph.bookingPriceType",
        "priceType": service.defaultPriceType,
        "reminders@odata.type": "#Collection(microsoft.graph.bookingReminder)",
        "reminders": service.defaultReminders,
        "serviceId": service.id,
        "serviceLocation": service.defaultLocation,
        "serviceName": service.displayName,
        "serviceNotes": service.notes,
        "startDateTime": {
            "@odata.type": "#microsoft.graph.dateTimeTimeZone",
            "dateTime": `${date}T11:00:00.0000000+00:00`,
            "timeZone": "IST"
        },
        "maximumAttendeesCount": service.maximumAttendeesCount,
        "filledAttendeesCount": 0,
        "customers@odata.type": "#Collection(microsoft.graph.bookingCustomerInformation)",
        "customers": [
            {
                "@odata.type": "#microsoft.graph.bookingCustomerInformation",
                "name": customerName,
                "emailAddress": "himanipopli@microsoft.com",
                "notes": null,
                "location": {},
                "timeZone": "America/Chicago",
                "customQuestionAnswers": []
            }
        ],
        "staffMemberIds": [staff.id]
    };
    return await axios.post('https://graph.microsoft.com/v1.0/solutions/bookingBusinesses/SpecialClasses@sdfjan24.onmicrosoft.com/appointments', body, {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
}

export const listCalendarView = async (startDate, endDate) => {
    const listAppointments = await axios.get('https://graph.microsoft.com/v1.0/solutions/bookingBusinesses/Book1HybridMic1@testbookingsuchiha.onmicrosoft.com/calendarView?start=2018-04-30T00:00:00Z&end=2018-05-10T00:00:00Z', {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return listAppointments.data.Value;
}
