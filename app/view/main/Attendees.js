/**
 * Attendees view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Attendees', {
    extend : 'Ext.grid.Grid',
    margin : '10 10 10 10',
    xtype : 'attendees',
    title : 'Attendees',
    store : 'Attendee',
    border : true,
    style : 'border:1px solid #5fa2dd',
    items : [
        {
            xtype : 'toolbar',
            height : 60,
            docked : 'top',
            items : [
                {
                    text : 'Add Attendee',
                    iconCls : 'x-fa fa-plus',
                    handler : function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype : 'panel',
                                floated : true,
                                modal : true,
                                hideOnMaskTap : true,
                                width : 320,
                                height : 300,
                                autoScroll : true,
                                showAnimation : {
                                    type : 'popIn',
                                    duration : 250,
                                    easing : 'ease-out'
                                },
                                hideAnimation: {
                                    type: 'popOut',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                centered: true,
                                items : [
                                    {
                                        xtype : 'formpanel',
                                        padding : 10,
                                        title : 'Add Attendee',
                                        defaults : {
                                            labelWidth : 120
                                        },
                                        items : [
                                            {
                                                xtype : 'toolbar',
                                                docked : 'bottom',
                                                items : [
                                                    '->',
                                                    {
                                                        text : 'Cancel',
                                                        iconCls : 'x-fa fa-times',
                                                        scope : this,
                                                        handler : function () {
                                                            this.overlay.hide();
                                                        }
                                                    },
                                                    {
                                                        text : 'Add',
                                                        scope : this,
                                                        iconCls : 'x-fa fa-plus',
                                                        handler : function () {
                                                            this.overlay.hide();
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Name'
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Job Title'
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Email'
                                            }
                                        ]
                                    }
                                ]
                            });
                        }
                        this.overlay.show();
                    }                    
                }
            ]
        }
    ],
    columns : [
        {
            text : 'Name',
            dataIndex : 'name',
            flex : 1
        },
        {
            text : 'Job Title',
            dataIndex : 'title',
            flex : 1
        },
        {
            text : 'Company',
            dataIndex : 'company',
            flex : 1
        },
        {
            text : 'Email',
            dataIndex : 'email',
            flex : 1
        }
    ]    
});