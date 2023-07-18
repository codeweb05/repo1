```mermaid
erDiagram

        activity_logs_type {
            Control Control
Alert Alert
Notification Notification
Update Update
Access Access
PowerUp PowerUp
        }
    


        company_contacts_type {
            technical technical
account account
billing billing
        }
    


        users_sites_permissions_permission_type {
            site site
route route
area area
        }
    


        activity_logs_user_type {
            User User
System System
        }
    


        device_link_statuses_operation {
            read read
write write
delayed_write delayed-write
        }
    


        permissions_scope {
            Admin Admin
Company Company
        }
    


        alert_logs_action {
            open open
acknowledged acknowledged
completed completed
        }
    


        communication_feeds_reason {
            MD MD
PI PI
        }
    


        email_templates_type {
            email email
sms sms
push_notification push notification
        }
    


        models_protocol {
            MB MB
RS_485 RS 485
DNP_3 DNP 3
RS_232 RS 232
        }
    


        site-builder-images_type {
            canvas_object canvas-object
background_image background-image
        }
    


        notifications_type {
            Tag Tag
Communication Communication
        }
    


        alerts_type {
            critical critical
urgent urgent
        }
    


        roles_type {
            admin admin
company company
        }
    


        alerts_status {
            open open
acknowledged acknowledged
completed completed
        }
    


        communication_links_link_type {
            poll poll
satellite satellite
active active
        }
    


        activity_logs_communication_type {
            Email Email
Text Text
Push_Notification Push Notification
        }
    


        communication_links_simpli_link_type {
            standalone standalone
hub hub
        }
    


        modbus_registers_data_type {
            I I
U U
L L
UL UL
F F
        }
    


        activity_logs_action {
            add add
delete delete
update update
login login
log_out log out
viewed viewed
moved moved
        }
    


        modbus_registers_alert_type {
            override override
inherit inherit
        }
    


        activity_logs_activity_type {
            communication communication
gallery gallery
area area
group group
modbusRegister modbusRegister
plcDevice plcDevice
role role
route route
site site
userSitePermission userSitePermission
user user
report report
notification notification
deviceLink deviceLink
alert alert
        }
    


        modbus_registers_alarm_type {
            lowAlarm lowAlarm
highAlarm highAlarm
lowLowAlarm lowLowAlarm
highHighAlarm highHighAlarm
        }
    


        plc_devices_protocol {
            MB MB
RS_485 RS 485
RS_232 RS 232
DNP_3 DNP 3
        }
    


        communication_links_picture_resolution {
            R640 640
R320 320
R160 160
        }
    


        modbus_registers_type {
            RR RR
WR WR
        }
    
  "activity_logs" {
    Int id "🗝️"
    String uuid 
    activity_logs_type type 
    activity_logs_user_type user_type 
    String message 
    activity_logs_communication_type communication_type "❓"
    activity_logs_action action "❓"
    activity_logs_activity_type activity_type "❓"
    Int activity_entity_id "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    DateTime created_at "❓"
    }
  

  "alert_logs" {
    Int id "🗝️"
    String uuid 
    alert_logs_action action "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    DateTime created_at "❓"
    }
  

  "alerts" {
    Int id "🗝️"
    String uuid 
    String message 
    Int device_id "❓"
    alerts_type type 
    alerts_status status 
    DateTime completed_at "❓"
    DateTime acknowledged_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    DateTime created_at "❓"
    }
  

  "areas" {
    Int id "🗝️"
    String uuid 
    String name 
    Decimal latitude "❓"
    Decimal longitude "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    DateTime created_at "❓"
    }
  

  "auth_codes" {
    Int id "🗝️"
    String email 
    String authorization_code 
    DateTime created_at "❓"
    }
  

  "categories" {
    Int id "🗝️"
    String uuid 
    String name 
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    DateTime created_at "❓"
    }
  

  "communication_feeds" {
    Int id "🗝️"
    String uuid 
    Int age "❓"
    communication_feeds_reason reason "❓"
    String image 
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "communication_links" {
    Int id "🗝️"
    String uuid 
    String password "❓"
    Boolean password_reset_flag "❓"
    DateTime reset_flag_expiry "❓"
    String internal_serial_number "❓"
    communication_links_link_type link_type 
    communication_links_simpli_link_type simpli_link_type 
    String name 
    String firmware_version "❓"
    String hardware_version "❓"
    Int update_interval "❓"
    Int picture_interval "❓"
    communication_links_picture_resolution picture_resolution "❓"
    Int motion_detection_interval "❓"
    String cam "❓"
    Boolean state "❓"
    DateTime last_updated "❓"
    DateTime created_at 
    DateTime scan_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "companies" {
    Int id "🗝️"
    String uuid "❓"
    String name "❓"
    String email 
    String address "❓"
    Boolean status 
    DateTime created_at "❓"
    Boolean assimilation_mode 
    String logo "❓"
    String timezone "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "companies_has_users" {

    }
  

  "company_contacts" {
    Int id "🗝️"
    String uuid "❓"
    company_contacts_type type 
    String name 
    String phone 
    String email 
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "device_link_statuses" {
    Int id "🗝️"
    Boolean link_down "❓"
    device_link_statuses_operation operation "❓"
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "device_tokens" {
    Int id "🗝️"
    String device_token 
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    DateTime created_at "❓"
    }
  

  "email_templates" {
    Int id "🗝️"
    String label 
    String subject 
    String body 
    email_templates_type type "❓"
    DateTime created_at "❓"
    }
  

  "gallery" {
    Int id "🗝️"
    String uuid 
    String name 
    String key 
    String note "❓"
    String uploaded_by 
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "groups" {
    Int id "🗝️"
    String uuid 
    String title 
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "groups_has_notifications" {

    }
  

  "manufacturers" {
    Int id "🗝️"
    String uuid 
    String name 
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    DateTime created_at "❓"
    }
  

  "modbus_registers" {
    Int id "🗝️"
    String uuid 
    Int address 
    String name "❓"
    modbus_registers_data_type data_type "❓"
    modbus_registers_alert_type alert_type "❓"
    modbus_registers_alarm_type alarm_type "❓"
    String value "❓"
    Float low_alarm "❓"
    Float high_alarm "❓"
    Float low_low_alarm "❓"
    Float high_high_alarm "❓"
    modbus_registers_type type 
    Int delay "❓"
    Int duration "❓"
    Int reset_value "❓"
    DateTime last_seen "❓"
    String current_value "❓"
    String toggle_value "❓"
    DateTime created_at 
    String clonedUuid "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "modbus_registers_has_notifications" {

    }
  

  "models" {
    Int id "🗝️"
    String uuid 
    String name 
    models_protocol protocol 
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    DateTime created_at "❓"
    }
  

  "notifications" {
    Int id "🗝️"
    String uuid 
    String name 
    notifications_type type 
    Json methods 
    Json triggers 
    Json monitored_items 
    Boolean status "❓"
    DateTime created_at 
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "permissions" {
    Int id "🗝️"
    String name "❓"
    permissions_scope scope 
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "plc_devices" {
    Int id "🗝️"
    String uuid 
    String slave_ip "❓"
    Int slave_id "❓"
    String name "❓"
    plc_devices_protocol protocol 
    Int scan_interval "❓"
    Int report_interval "❓"
    Int control_interval "❓"
    Int alarm_control "❓"
    Int link_down_scan_interval "❓"
    Int link_down_report_interval "❓"
    Int link_down_link_status_report_interval "❓"
    Int device_offset "❓"
    String status "❓"
    DateTime last_seen "❓"
    DateTime created_at 
    DateTime scan_at "❓"
    Boolean is_scanning 
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "roles" {
    Int id "🗝️"
    String uuid 
    String title 
    Int active 
    Int editable 
    Int companies_id "❓"
    roles_type type "❓"
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "roles_has_permissions" {
    Boolean can_see "❓"
    Boolean add "❓"
    Boolean update "❓"
    Boolean archive "❓"
    }
  

  "routes" {
    Int id "🗝️"
    String uuid 
    String name 
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "sensor_types" {
    Int id "🗝️"
    String uuid 
    String name 
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "site-builder-images" {
    Int id "🗝️"
    String uuid 
    String name 
    String key 
    site_builder_images_type type 
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "sites" {
    Int id "🗝️"
    String uuid 
    String name 
    Decimal latitude "❓"
    Decimal longitude "❓"
    String address "❓"
    String picture "❓"
    String notes "❓"
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "users" {
    Int id "🗝️"
    String uuid 
    String first_name 
    String last_name 
    String email 
    String password "❓"
    String country_code "❓"
    String phone "❓"
    String forgot_token "❓"
    Boolean force_logout "❓"
    Boolean force_2fa "❓"
    String profile_picture "❓"
    String timezone "❓"
    DateTime created_at "❓"
    DateTime updated_at "❓"
    DateTime deleted_at "❓"
    }
  

  "users_has_groups" {

    }
  

  "users_has_notifications" {

    }
  

  "users_sites_permissions" {
    Int id "🗝️"
    users_sites_permissions_permission_type permission_type 
    Int permission_type_id 
    Boolean view "❓"
    Boolean manage "❓"
    Boolean control "❓"
    DateTime created_at "❓"
    DateTime updated_at "❓"
    }
  
    "activity_logs" o|--|| "activity_logs_type" : "enum:type"
    "activity_logs" o|--|| "activity_logs_user_type" : "enum:user_type"
    "activity_logs" o|--|o "activity_logs_communication_type" : "enum:communication_type"
    "activity_logs" o|--|o "activity_logs_action" : "enum:action"
    "activity_logs" o|--|o "activity_logs_activity_type" : "enum:activity_type"
    "activity_logs" o|--|o "sites" : "sites"
    "activity_logs" o|--|o "companies" : "companies"
    "activity_logs" o|--|o "users" : "users"
    "alert_logs" o|--|o "alert_logs_action" : "enum:action"
    "alert_logs" o|--|o "alerts" : "alerts"
    "alert_logs" o|--|o "users" : "users"
    "alerts" o|--|| "alerts_type" : "enum:type"
    "alerts" o|--|| "alerts_status" : "enum:status"
    "alerts" o{--}o "alert_logs" : "alert_logs"
    "alerts" o|--|o "users" : "users_alerts_acknowleged_byTousers"
    "alerts" o|--|| "sites" : "sites"
    "alerts" o|--|o "users" : "users_alerts_completed_byTousers"
    "alerts" o|--|o "modbus_registers" : "modbus_registers"
    "areas" o|--|| "companies" : "companies"
    "areas" o{--}o "routes" : "routes"
    "areas" o{--}o "sites" : "sites"
    "categories" o|--|o "sensor_types" : "sensor_types"
    "categories" o{--}o "modbus_registers" : "modbus_registers"
    "communication_feeds" o|--|o "communication_feeds_reason" : "enum:reason"
    "communication_feeds" o|--|o "communication_links" : "communication_links"
    "communication_links" o|--|| "communication_links_link_type" : "enum:link_type"
    "communication_links" o|--|| "communication_links_simpli_link_type" : "enum:simpli_link_type"
    "communication_links" o|--|o "communication_links_picture_resolution" : "enum:picture_resolution"
    "communication_links" o{--}o "communication_feeds" : "communication_feeds"
    "communication_links" o|--|o "companies" : "companies"
    "communication_links" o{--}o "plc_devices" : "plc_devices"
    "communication_links" o{--}o "sites" : "sites"
    "companies" o{--}o "activity_logs" : "activity_logs"
    "companies" o{--}o "areas" : "areas"
    "companies" o{--}o "communication_links" : "communication_links"
    "companies" o|--|| "users" : "users"
    "companies" o{--}o "companies_has_users" : "companies_has_users"
    "companies" o{--}o "company_contacts" : "company_contacts"
    "companies" o{--}o "groups" : "groups"
    "companies" o{--}o "notifications" : "notifications"
    "companies" o{--}o "plc_devices" : "plc_devices"
    "companies" o{--}o "routes" : "routes"
    "companies" o{--}o "site-builder-images" : "site_builder_images"
    "companies" o{--}o "sites" : "sites"
    "companies_has_users" o|--|| "companies" : "companies"
    "companies_has_users" o|--|| "users" : "users"
    "company_contacts" o|--|| "company_contacts_type" : "enum:type"
    "company_contacts" o|--|o "companies" : "companies"
    "device_link_statuses" o|--|o "device_link_statuses_operation" : "enum:operation"
    "device_link_statuses" o|--|| "plc_devices" : "plc_devices"
    "device_tokens" o|--|| "users" : "users"
    "email_templates" o|--|o "email_templates_type" : "enum:type"
    "gallery" o|--|o "sites" : "sites"
    "groups" o|--|| "companies" : "companies"
    "groups" o{--}o "groups_has_notifications" : "groups_has_notifications"
    "groups" o{--}o "users_has_groups" : "users_has_groups"
    "groups_has_notifications" o|--|| "groups" : "groups"
    "groups_has_notifications" o|--|| "notifications" : "notifications"
    "manufacturers" o{--}o "models" : "models"
    "manufacturers" o{--}o "plc_devices" : "plc_devices"
    "modbus_registers" o|--|o "modbus_registers_data_type" : "enum:data_type"
    "modbus_registers" o|--|o "modbus_registers_alert_type" : "enum:alert_type"
    "modbus_registers" o|--|o "modbus_registers_alarm_type" : "enum:alarm_type"
    "modbus_registers" o|--|| "modbus_registers_type" : "enum:type"
    "modbus_registers" o{--}o "alerts" : "alerts"
    "modbus_registers" o|--|o "sensor_types" : "sensor_types"
    "modbus_registers" o|--|| "plc_devices" : "plc_devices"
    "modbus_registers" o|--|o "modbus_registers" : "modbus_registers"
    "modbus_registers" o{--}o "modbus_registers" : "other_modbus_registers"
    "modbus_registers" o|--|o "categories" : "categories"
    "modbus_registers" o{--}o "modbus_registers_has_notifications" : "modbus_registers_has_notifications"
    "modbus_registers_has_notifications" o|--|| "notifications" : "notifications"
    "modbus_registers_has_notifications" o|--|| "modbus_registers" : "modbus_registers"
    "models" o|--|| "models_protocol" : "enum:protocol"
    "models" o|--|| "manufacturers" : "manufacturers"
    "models" o{--}o "plc_devices" : "plc_devices"
    "notifications" o|--|| "notifications_type" : "enum:type"
    "notifications" o{--}o "groups_has_notifications" : "groups_has_notifications"
    "notifications" o{--}o "modbus_registers_has_notifications" : "modbus_registers_has_notifications"
    "notifications" o|--|o "users" : "users"
    "notifications" o|--|o "companies" : "companies"
    "notifications" o{--}o "users_has_notifications" : "users_has_notifications"
    "permissions" o|--|| "permissions_scope" : "enum:scope"
    "permissions" o|--|o "permissions" : "permissions"
    "permissions" o{--}o "permissions" : "other_permissions"
    "permissions" o{--}o "roles_has_permissions" : "roles_has_permissions"
    "plc_devices" o|--|| "plc_devices_protocol" : "enum:protocol"
    "plc_devices" o{--}o "device_link_statuses" : "device_link_statuses"
    "plc_devices" o{--}o "modbus_registers" : "modbus_registers"
    "plc_devices" o|--|o "sites" : "sites"
    "plc_devices" o|--|o "models" : "models"
    "plc_devices" o|--|| "companies" : "companies"
    "plc_devices" o|--|o "communication_links" : "communication_links"
    "plc_devices" o|--|o "manufacturers" : "manufacturers"
    "roles" o|--|o "roles_type" : "enum:type"
    "roles" o{--}o "roles_has_permissions" : "roles_has_permissions"
    "roles" o{--}o "users" : "users"
    "roles_has_permissions" o|--|| "permissions" : "permissions"
    "roles_has_permissions" o|--|| "roles" : "roles"
    "routes" o|--|| "companies" : "companies"
    "routes" o|--|| "areas" : "areas"
    "routes" o{--}o "sites" : "sites"
    "sensor_types" o{--}o "categories" : "categories"
    "sensor_types" o{--}o "modbus_registers" : "modbus_registers"
    "site-builder-images" o|--|| "site_builder_images_type" : "enum:type"
    "site-builder-images" o|--|o "companies" : "companies"
    "site-builder-images" o|--|o "users" : "users"
    "sites" o{--}o "activity_logs" : "activity_logs"
    "sites" o{--}o "alerts" : "alerts"
    "sites" o{--}o "gallery" : "gallery"
    "sites" o{--}o "plc_devices" : "plc_devices"
    "sites" o|--|o "routes" : "routes"
    "sites" o|--|o "communication_links" : "communication_links"
    "sites" o|--|| "areas" : "areas"
    "sites" o|--|| "companies" : "companies"
    "users" o{--}o "activity_logs" : "activity_logs"
    "users" o{--}o "alert_logs" : "alert_logs"
    "users" o{--}o "alerts" : "alerts_alerts_acknowleged_byTousers"
    "users" o{--}o "alerts" : "alerts_alerts_completed_byTousers"
    "users" o{--}o "companies" : "companies"
    "users" o{--}o "companies_has_users" : "companies_has_users"
    "users" o{--}o "device_tokens" : "device_tokens"
    "users" o{--}o "notifications" : "notifications"
    "users" o{--}o "site-builder-images" : "site_builder_images"
    "users" o|--|| "roles" : "roles"
    "users" o{--}o "users_has_groups" : "users_has_groups"
    "users" o{--}o "users_has_notifications" : "users_has_notifications"
    "users" o{--}o "users_sites_permissions" : "users_sites_permissions"
    "users_has_groups" o|--|| "users" : "users"
    "users_has_groups" o|--|| "groups" : "groups"
    "users_has_notifications" o|--|| "users" : "users"
    "users_has_notifications" o|--|| "notifications" : "notifications"
    "users_sites_permissions" o|--|| "users_sites_permissions_permission_type" : "enum:permission_type"
    "users_sites_permissions" o|--|| "users" : "users"
```
